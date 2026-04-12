"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { AllowedLanguagesEncodedType, setSystemLanguageStore } from "@/hooks/slice/systemLanguage";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import { ALLOWED_LANGUAGES } from "@/utils/getServerLanguage";
import { AllowedPagesType } from "@/utils/metadata";

dayjs.extend(utc);

export default function BasicRouter({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  /*
    const [cookies, setCookie] = useCookies(['systemColor', 'systemLanguage']);
  
    const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);
    const { sessionId } = useSelector((state: RootState) => state.sessionId);
  */

  const allowedRoutes: AllowedPagesType[] = ['/', '/about', '/contact', '/legal-terms', '/privacy-policy'];
  const redirectTo = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;

  const init = async () => {
    if (router && !allowedRoutes.includes(pathname as AllowedPagesType)) router.push(redirectTo);

    getInitSystemLanguage();
    /*
    const _sessionId = dayjs().utc().unix().toString();
    dispatch(setSessionIdStore(_sessionId));
    */
  };

  const getInitSystemLanguage = () => {
    const _systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale.split(`-`)[0];
    const actualLanguage = ALLOWED_LANGUAGES.includes(_systemLanguage as AllowedLanguagesEncodedType) ? _systemLanguage as AllowedLanguagesEncodedType : "es";

    dispatch(setSystemLanguageStore("en"));

    return actualLanguage;
  };

  useEffect(() => {
    init();
  }, []);

  return children;
}
