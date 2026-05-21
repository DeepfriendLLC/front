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
      title: "Deepfriend | Compañía emocional con IA basada en TCC",
      description:
        "Habla con Blue, tu compañía emocional con IA. Basada en terapia cognitivo-conductual (TCC) para ansiedad, estrés e insomnio. Privada, 24/7 y sin venta de datos.",
    },
    en: {
      title: "Deepfriend | CBT-Based AI Companion for Mental Health",
      description:
        "Talk to Blue, an AI emotional companion built on CBT science. Evidence-based support for anxiety, stress and insomnia. Available 24/7. Private, data never sold.",
    },
    de: {
      title: "Deepfriend | Evidenzbasierte KI für deine mentale Gesundheit",
      description:
        "Sprich mit Blue – KI-Begleitung auf KVT-Basis. Für Angst, Stress und Schlaflosigkeit. Privat, rund um die Uhr verfügbar, Daten werden niemals verkauft.",
    },
  },
  "/about": {
    es: {
      title: "Acerca de Deepfriend | Psicología basada en evidencia",
      description:
        "Conoce la misión, valores y equipo de Deepfriend. Un proyecto independiente de compañía emocional con IA basada en TCC, sin inversores y comprometido con tu privacidad.",
    },
    en: {
      title: "About Deepfriend | Evidence-Based Mental Health App",
      description:
        "Meet the team and story behind Deepfriend — a CBT-based AI emotional companion. Built by a software engineer, advised by a CBT psychologist, with no investors.",
    },
    de: {
      title: "Über Deepfriend | Evidenzbasierte App für mentale Gesundheit",
      description:
        "Lerne das Team und die Geschichte von Deepfriend kennen. Ein unabhängiges KVT-basiertes KI-Begleitprojekt – ohne Investoren, mit echtem Datenschutz.",
    },
  },
  "/contact": {
    es: {
      title: "Contacto | App de salud mental con IA",
      description:
        "¿Preguntas, soporte o feedback sobre Deepfriend? Escríbenos directamente. Respondemos en 24–48 horas laborables y leemos cada mensaje.",
    },
    en: {
      title: "Contact | AI Mental Health App",
      description:
        "Questions, support or feedback about Deepfriend? Write to us. We reply within 24–48 business hours and read every message personally.",
    },
    de: {
      title: "Kontakt | App für mentale Gesundheit",
      description:
        "Fragen, Support oder Feedback zu Deepfriend? Schreib uns direkt. Wir antworten innerhalb von 24–48 Werkstunden und lesen jede Nachricht persönlich.",
    },
  },
  "/legal-terms": {
    es: {
      title: "Términos de uso",
      description:
        "Condiciones de uso de Deepfriend, la app de compañía emocional con IA basada en TCC. Uso responsable y transparente, sin letra pequeña.",
    },
    en: {
      title: "Terms of Use",
      description:
        "Terms and conditions for using Deepfriend, the CBT-based AI emotional companion app. Transparent, responsible and always user-first.",
    },
    de: {
      title: "Nutzungsbedingungen",
      description:
        "Nutzungsbedingungen für Deepfriend, die KVT-basierte KI-App für emotionale Begleitung. Transparent, verantwortungsvoll und nutzerorientiert.",
    },
  },
  "/privacy-policy": {
    es: {
      title: "Política de privacidad",
      description:
        "Deepfriend nunca vende ni comparte tus datos. Sin terceros, sin inversores, con cifrado HTTPS. Consulta cómo protegemos tu privacidad de forma absoluta.",
    },
    en: {
      title: "Privacy Policy",
      description:
        "Deepfriend never sells or shares your data. No third parties, no investors, end-to-end HTTPS encryption. Read how we protect your privacy absolutely.",
    },
    de: {
      title: "Datenschutzerklärung",
      description:
        "Deepfriend verkauft oder teilt deine Daten niemals. Keine Drittparteien, keine Investoren, HTTPS-Verschlüsselung. Lies, wie wir deine Privatsphäre schützen.",
    },
  },
};
