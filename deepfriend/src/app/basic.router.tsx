"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setSystemColorStore } from "@/store/slice/systemColor";
import { Navbar } from "@/components/navbar";
import { BASIC_DARK_COLOR, BASIC_LIGHT_COLOR } from "./layout";
import { Footer } from "@/components/footer";
import { useRouter } from "next/navigation";
import { AllowedLanguagesEncodedType, setSystemLanguageStore } from "@/store/slice/systemLanguage";

export default function BasicRouter({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const pathname = usePathname();
  const [cookies, setCookie, removeCookie] = useCookies(['systemColor', 'systemLanguage']);

  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const { systemLanguage } = useSelector((state: RootState) => state.systemLanguage);

  const dispatch = useDispatch();

  const allowedRoutes = ['/', '/about', '/contact', '/pricing', '/legal-terms', '/privacy-policy', '/admin/login'];
  const redirectTo = `https://soundcloud.com/pablo-vallejo-907366850/sets/bubbles-love-you`;

  useEffect(() => {
    if (router && !allowedRoutes.includes(pathname)) router.push(redirectTo);
  }, []);

  const updateInitialSystemLanguage = () => {
    if (!cookies.systemLanguage) {
      const _systemLanguage = Intl.DateTimeFormat().resolvedOptions().locale.split(`-`)[0];

      const initialSystemLanguage: AllowedLanguagesEncodedType = ['en', 'es'].includes(_systemLanguage) ? _systemLanguage as AllowedLanguagesEncodedType : "en";

      setCookie('systemLanguage', initialSystemLanguage);
      dispatch(setSystemLanguageStore(initialSystemLanguage));
    } else dispatch(setSystemLanguageStore(cookies.systemLanguage));
  };

  const updateInitialSystemColor = () => {
    if (!cookies.systemColor) {
      const initialSystemColorMatch = window.matchMedia("(prefers-color-scheme: dark)");
      const initialSystemColor = initialSystemColorMatch.matches ? "dark" : "light";

      setCookie('systemColor', initialSystemColor);
      dispatch(setSystemColorStore(initialSystemColor));
    } else dispatch(setSystemColorStore(cookies.systemColor));
  };

  useEffect(() => {
    updateInitialSystemColor();
    updateInitialSystemLanguage();
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
      <Navbar pathname={pathname} systemColor={systemColor} updateSystemColor={updateSystemColor} systemLanguage={systemLanguage} updateSystemLanguage={updateSystemLanguage} />
      {children}
      <Footer />
    </div>
  );
}
