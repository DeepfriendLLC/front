"use client";

import { Provider } from "react-redux";
import { store } from "@/hooks/store";
import BasicRouter from "./basic.router";
import { Head } from "@/components/basic/head";

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CookiesProvider } from "react-cookie";

export const BASIC_DARK_COLOR = "black";
export const BASIC_LIGHT_COLOR = "white";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="es">
        <Head />
        <body>
          <CookiesProvider>
            <BasicRouter children={children} />
          </CookiesProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </Provider>
  );
}
