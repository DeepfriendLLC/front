# Deepfriend — Frontend

**Live:** [dfbubbles.com](https://dfbubbles.com) · Deployed on [Vercel](https://vercel.com)

The official web frontend for **Deepfriend**, a CBT-based AI emotional companion. Talk to Blue — an AI companion grounded in Cognitive Behavioral Therapy (CBT) — for anxiety, stress, and insomnia. Private, available 24/7, and your data is never sold.

---

## What is Deepfriend?

Deepfriend is an independent mental health project built around **Blue**, an AI emotional companion designed with evidence-based CBT methodology. No investors. No data selling. No small print.

- Emotional support grounded in CBT science
- Available around the clock
- Full privacy — HTTPS end-to-end, no third-party data sharing
- Multilingual: **Español · English · Deutsch**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI | [React 19](https://react.dev) + TypeScript |
| State | Redux Toolkit + React Redux |
| Content | MDX (`@next/mdx`) |
| i18n | Custom — ES / EN / DE |
| Analytics | Vercel Analytics + Speed Insights |
| Deployment | [Vercel](https://vercel.com) |

---

## Project Structure

    deepfriend/
    ├── src/
    │   ├── app/
    │   │   ├── [lang]/          # Locale-scoped routes (es, en, de)
    │   │   │   ├── page.tsx     # Home
    │   │   │   ├── about/
    │   │   │   ├── contact/
    │   │   │   ├── legal-terms/
    │   │   │   └── privacy-policy/
    │   │   ├── sitemap.ts
    │   │   ├── robots.ts
    │   │   └── manifest.ts
    │   ├── constants/
    │   │   ├── routes/
    │   │   ├── seo/
    │   │   └── translations/
    │   └── i18n/
    └── package.json

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm, yarn, or pnpm

### Install & Run

```bash
# Clone the repository
git clone https://github.com/pablovallejodev/front.git
cd front/deepfriend

# Install dependencies
npm install

# Start development server (with Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Deployment

The app is continuously deployed on **Vercel** and available at **[dfbubbles.com](https://dfbubbles.com)**.

---

## License

This project is licensed under the **[AGPL-3.0-only](https://www.gnu.org/licenses/agpl-3.0.html)** license.

**What this means in practice:**

- You are free to use, modify, and distribute this code — including commercially.
- Any modifications or derivative works **must be released under the same AGPL-3.0 license** (strong copyleft).
- If you deploy a modified version as a **network service** (e.g. a web app or SaaS), you are also required to **publish that modified source code**. This is the key difference between AGPL and GPL.
- In short: use it freely, but keep it open source.

---

## Author

Built with care by **Pablo Vallejo**, founder of [Deepfriend](https://dfbubbles.com).

> *Hope it helps the community.*
