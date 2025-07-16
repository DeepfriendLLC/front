"use client";

import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import BasicRouter from "./basic.router";
import { Head } from "@/components/head";

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const BASIC_DARK_COLOR = "black"; //"#031521";
export const BASIC_LIGHT_COLOR = "#F8F8F8";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mensajito = `Veritas liberabit vos.`;
  console.log(mensajito);

  return (
    <Provider store={store}>
      <html lang="en">
        <Head />
        <body>
          <BasicRouter children={children} />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </Provider>
  );
}
