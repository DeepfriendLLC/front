"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/hooks/store";
import { setSystemColorStore, SystemColorType } from "@/hooks/slice/systemColor";
import { Navbar } from "@/components/basic/navbar";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "./layout";
import { Footer } from "@/components/basic/footer";
import { useRouter } from "next/navigation";
import { AllowedLanguagesEncodedType, setSystemLanguageStore } from "@/hooks/slice/systemLanguage";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import { setSessionIdStore } from "@/hooks/slice/sessionId";

dayjs.extend(utc);

export default function BasicRouter({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const [cookies, setCookie] = useCookies(['systemColor', 'systemLanguage']);

  const { systemColor } = useSelector((state: RootState) => state.systemColor);
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
      const actualLanguage = ['en', 'es'].includes(_systemLanguage) ? _systemLanguage as AllowedLanguagesEncodedType : "en";

      setCookie('systemLanguage', actualLanguage);
    } else actualLanguage = cookies.systemLanguage as AllowedLanguagesEncodedType;

    dispatch(setSystemLanguageStore(actualLanguage));

    return actualLanguage;
  };
  
/*
  const getInitSystemColor = () => {
    let actualColor: SystemColorType = "light";
    
    if (!cookies.systemColor) setCookie('systemColor', actualColor);
    else actualColor = cookies.systemColor;

    dispatch(setSystemColorStore(actualColor));
    return "light" as SystemColorType;
  };
*/

  useEffect(() => {
    init();
  }, []);

  const updateSystemColor = (_systemColor: "light" | "dark") => {
    setCookie('systemColor', _systemColor);
    dispatch(setSystemColorStore(_systemColor));
  };

  const updateSystemLanguage = (_systemLanguage: AllowedLanguagesEncodedType) => {
    setCookie('systemLanguage', _systemLanguage);
    dispatch(setSystemLanguageStore(_systemLanguage));
  };

  return (
    <div className="col-lg-12" style={{
      backgroundColor: systemColor === 'dark' ? BASIC_DARK_COLOR : BASIC_LIGHT_COLOR,
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      overflowX: "hidden",
      overflowY: "scroll",
      padding: 0,
      margin: 0
    }}>
      <Navbar pathname={pathname} sessionId={sessionId} systemColor={systemColor} updateSystemColor={updateSystemColor} systemLanguage={systemLanguage} updateSystemLanguage={updateSystemLanguage} />
        {children}
      <Footer />
    </div>
  );
}
