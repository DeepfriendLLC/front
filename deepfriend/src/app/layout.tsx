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
  const message = `Veritas liberabit vos.`;
  console.log(message);

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


/*

About the job
Company Description

Deepfriend is a pre-revenue healthtech startup (pre-seed). It’s not an idea it’s a legally constituted company with MVP launched and initial traction.



Deepfriend’s website - dfbubbles.com



Deepfriend mission is to offer a complete mental health and wellness solution based on scientific evidence, to promote science in an accessible and secure environment. Deepfriend values are strongly focused on scientific evidence and user privacy.



Products

Bubbles Wellness AI: Scientific wellness assistant based on CBT with a complex architecture that offers support and daily guidance with strong focus on evidence-based techniques.
Zenverse: Video social network, Tiktok style, focused on positive interactions with an integrated toolkit to allow users to listen: music, meditations and ambient sounds, to create their own custom “Zen Universe” while they enjoy scrolling.
Scientific Mindfulness: Library with over 100 scientific resources: techniques and habits, that brings users knowledge and tools to control anxiety, stress, insomnia and more.


The Role

This is a full-time remote Business Co-Founder role at Deepfriend. You’ll work directly with the founder playing a strategic and operational leadership role in the company developing a pre-seed, venture-scalable fundraising strategy and go-to-market product plan.

Compensation: Founder-level equity with standard vesting structure. Significant ownership aligned with long-term partnership.



Qualifications

Strategic and operational leadership
Excellent english and spanish communication skills
Fundraising experience (pre-seed / seed)
Ability to build investor narrative and open funding conversations
Strong go-to-market and monetization strategy execution
SaaS or Healthtech background preferred


This is not an advisor role. I’m looking for a true operator and long-term partner.

If you have experience scaling early-stage startups and are excited about building a scientifically rigorous AI Mental Health Wellness platform, let’s talk.

*/