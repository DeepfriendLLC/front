import { type Locale } from "@/i18n/config";
import { ROUTES } from "../routes/routes";

type RoutesType = typeof ROUTES[number];

type DinamicPageMetadataType = {
  title: string;
  description: string
};

type CopyMetadataType = Record<RoutesType, Record<Locale, DinamicPageMetadataType>>;

export const COPY: CopyMetadataType = {
  "": {
    es: {
      title: "Deepfriend | IA científica para tu salud mental",
      description:
        "App de compañía emocional con IA basada en evidencia científica (TCC). 24/7, privada y sin prejuicios.",
    },
    en: {
      title: "Deepfriend | Science-backed AI for your mental health",
      description:
        "AI emotional companion app grounded in scientific evidence (CBT). 24/7, private, judgment-free.",
    },
    de: {
      title: "Deepfriend | Wissenschaftliche KI für deine mentale Gesundheit",
      description:
        "KI-App für emotionale Begleitung, gestützt auf wissenschaftliche Evidenz (KVT). Rund um die Uhr, privat, ohne Vorurteile.",
    },
  },
  "/about": {
    es: {
      title: "about | IA científica para tu salud mental",
      description:
        "App de compañía emocional con IA basada en evidencia científica (TCC). 24/7, privada y sin prejuicios.",
    },
    en: {
      title: "Deepfriend | Science-backed AI for your mental health",
      description:
        "AI emotional companion app grounded in scientific evidence (CBT). 24/7, private, judgment-free.",
    },
    de: {
      title: "Deepfriend | Wissenschaftliche KI für deine mentale Gesundheit",
      description:
        "KI-App für emotionale Begleitung, gestützt auf wissenschaftliche Evidenz (KVT). Rund um die Uhr, privat, ohne Vorurteile.",
    },
  },
  "/contact": {
    es: {
      title: "contact | IA científica para tu salud mental",
      description:
        "App de compañía emocional con IA basada en evidencia científica (TCC). 24/7, privada y sin prejuicios.",
    },
    en: {
      title: "Deepfriend | Science-backed AI for your mental health",
      description:
        "AI emotional companion app grounded in scientific evidence (CBT). 24/7, private, judgment-free.",
    },
    de: {
      title: "Deepfriend | Wissenschaftliche KI für deine mentale Gesundheit",
      description:
        "KI-App für emotionale Begleitung, gestützt auf wissenschaftliche Evidenz (KVT). Rund um die Uhr, privat, ohne Vorurteile.",
    },
  },
  "/legal-terms": {
    es: {
      title: "legal terms | IA científica para tu salud mental",
      description:
        "App de compañía emocional con IA basada en evidencia científica (TCC). 24/7, privada y sin prejuicios.",
    },
    en: {
      title: "Deepfriend | Science-backed AI for your mental health",
      description:
        "AI emotional companion app grounded in scientific evidence (CBT). 24/7, private, judgment-free.",
    },
    de: {
      title: "Deepfriend | Wissenschaftliche KI für deine mentale Gesundheit",
      description:
        "KI-App für emotionale Begleitung, gestützt auf wissenschaftliche Evidenz (KVT). Rund um die Uhr, privat, ohne Vorurteile.",
    },
  },
  "/privacy-policy": {
    es: {
      title: "privacy policy | IA científica para tu salud mental",
      description:
        "App de compañía emocional con IA basada en evidencia científica (TCC). 24/7, privada y sin prejuicios.",
    },
    en: {
      title: "Deepfriend | Science-backed AI for your mental health",
      description:
        "AI emotional companion app grounded in scientific evidence (CBT). 24/7, private, judgment-free.",
    },
    de: {
      title: "Deepfriend | Wissenschaftliche KI für deine mentale Gesundheit",
      description:
        "KI-App für emotionale Begleitung, gestützt auf wissenschaftliche Evidenz (KVT). Rund um die Uhr, privat, ohne Vorurteile.",
    },
  },
};
