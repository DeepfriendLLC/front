"use client";

import styles from "@/styles/global.module.css";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { NavbarComponent } from "@/components/basic/navbar";
import { FooterComponent } from "@/components/basic/footer";
import { useRouter } from "next/navigation";
import { AllowedLanguagesEncodedType, setSystemLanguageStore } from "@/hooks/slice/systemLanguage";
import { setSessionIdStore } from "@/hooks/slice/sessionId";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export default function BasicRouter({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const [cookies, setCookie] = useCookies(['systemColor', 'systemLanguage']);

  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
  const { sessionId } = useSelector((state: RootState) => state.sessionId);

  const allowedRoutes = ['/', '/about', '/contact', '/pricing', '/legal-terms', '/privacy-policy', '/login', '/dashboard'];
  const redirectTo = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;

  const init = async () => {
    if (router && !allowedRoutes.includes(pathname)) router.push(redirectTo);

    getInitSystemLanguage();
    const _sessionId = dayjs().utc().unix().toString();

    dispatch(setSessionIdStore(_sessionId));
  };

  const getInitSystemLanguage = () => {
    let actualLanguage: AllowedLanguagesEncodedType = "en";

    if (!cookies.systemLanguage) {
      const _systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale.split(`-`)[0];
      const actualLanguage = ['en', 'ca', 'es'].includes(_systemLanguage) ? _systemLanguage as AllowedLanguagesEncodedType : "es";

      setCookie('systemLanguage', "es");
    } else actualLanguage = "es" //cookies.systemLanguage as AllowedLanguagesEncodedType;

    dispatch(setSystemLanguageStore(actualLanguage));

    return actualLanguage;
  };

  useEffect(() => {
    init();
  }, []);

  const updateSystemLanguage = (_systemLanguage: AllowedLanguagesEncodedType) => {
    setCookie('systemLanguage', _systemLanguage);
    dispatch(setSystemLanguageStore(_systemLanguage));
  };

  return (
    <div>
      <NavbarComponent />
        {children}
      <FooterComponent />
    </div>
  );
}
