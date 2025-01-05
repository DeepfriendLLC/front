"use client";

import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import BasicRouter from "./basic.router";
import { Head } from "@/components/head";

export const BASIC_DARK_COLOR = "#031521";
export const BASIC_LIGHT_COLOR = "#F8F8F8";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Provider store={store}>
      <html lang="en">
        <Head />
        <body>
          <BasicRouter children={children} />
        </body>
      </html>
    </Provider>
  );
}
