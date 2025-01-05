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

export default function BasicRouter({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [cookies, setCookie, removeCookie] = useCookies(['systemColor']);

  const { systemColor } = useSelector((state: RootState) => state.systemColor);
  const dispatch = useDispatch();


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
  }, []);

  const updateSystemColor = (_systemColor: "light" | "dark") => {
    setCookie('systemColor', _systemColor);
    dispatch(setSystemColorStore(_systemColor));
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
      <Navbar pathname={pathname} systemColor={systemColor} updateSystemColor={updateSystemColor} />
      {children}
      <Footer />
    </div>
  );
}
