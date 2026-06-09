import { Locale } from "@/i18n/config";

const es = {
  // — Navbar / footer
  nav_about: "Acerca de",
  nav_contact: "Contacto",
  nav_cta: "Descargar",

  footer_tagline:
    "Compañía emocional con IA, basada en la ciencia de la TCC. Diseñado en España.",
  footer_product: "Producto",
  footer_product_blue: "Blue AI",
  footer_product_mindfulness: "Mindfulness",
  footer_product_library: "Biblioteca",
  footer_company: "Empresa",
  footer_company_about: "Acerca de",
  footer_company_contact: "Contacto",
  footer_legal: "Legal",
  footer_legal_privacy: "Política de privacidad",
  footer_legal_terms: "Términos de uso",
  footer_contact_title: "Contacto",
  footer_lang_title: "Idioma",
  footer_copyright: "Todos los derechos reservados.",
  footer_madein: "Hecho con cuidado en España.",

  // — Page heads
  head_home_title: "Deepfriend",
  head_about_title: "Acerca de",
  head_contact_title: "Contacto",
  head_legal_terms_title: "Términos legales",
  head_privacy_policy_title: "Política de privacidad",

  // — Landing / Hero
  hero_eyebrow: "Compañía emocional · Basada en ciencia",
  hero_title: "Siente alivio. Recupera tu calma.",
  hero_highlight: "alivio",
  hero_subtitle:
    "Cuando la cabeza no para, Blue te escucha — sin juicio, sin prisa. Métodos con evidencia científica para ansiedad, estrés e insomnio. Privado. Disponible 24/7.",
  hero_cta_primary: "Descargar en Google Play",
  hero_cta_secondary: "Ver cómo funciona",
  hero_micro_rating: "Valoraciones en Google Play",
  hero_micro_downloads: "+1.000 personas ya han probado Blue",
  hero_micro_privacy: "Datos nunca vendidos",

  // — Trust strip
  trust_cbt: "Centrado en TCC",
  trust_clinical: "Revisión clínica externa",
  trust_privacy: "Datos nunca vendidos",
  trust_24_7: "Disponible 24/7",

  // — Section: science
  science_eyebrow: "¿Por qué esto es distinto?",
  science_title: "Has probado otras cosas. Esto está construido para funcionar.",
  science_highlight: "funcionar",
  science_text:
    "Es normal dudar. Muchas apps prometen calma con frases bonitas — sin base científica. Deepfriend es diferente: cada técnica que usa Blue ha sido validada bajo el método científico. La TCC es el centro; el resto son herramientas complementarias, siempre con evidencia.",
  science_diagram_thought: "Pensamiento",
  science_diagram_emotion: "Emoción",
  science_diagram_behavior: "Conducta",
  science_pillar_1_title: "Métodos publicados y trazables",
  science_pillar_1_text:
    "Reestructuración cognitiva, exposición gradual, higiene del sueño — técnicas con respaldo en literatura revisada por pares.",
  science_pillar_2_title: "Centrado en TCC, multimodal con evidencia",
  science_pillar_2_text:
    "Blue no improvisa. Parte del marco cognitivo-conductual — el estándar con mayor respaldo empírico — e integra otras técnicas validadas cuando aportan.",
  science_pillar_3_title: "Revisado con profesionales TCC",
  science_pillar_3_text:
    "Psicólogos especializados revisan el producto y aportan feedback continuo. No hay suposiciones: hay criterio clínico externo.",

  // — Section: products
  products_blue_eyebrow: "Producto principal",
  product_blue_label: "Blue AI",
  product_blue_title: "Blue. Ahí cuando lo necesitas.",
  product_blue_text:
    "Una presencia que te escucha de verdad. Para desahogarte, pensar en voz alta o sentirte acompañado — sin juicio, sin prisa. Como ese amigo en quien confías, con herramientas que no improvisan.",
  product_blue_bullet_1: "Habla cuando lo necesites — alivio desde la primera conversación.",
  product_blue_bullet_2: "Chat y llamada de voz — elige cómo te sientes más cómodo.",
  product_blue_bullet_3: "Te conoce con el tiempo — recuerda lo importante y acompaña con contexto.",
  product_blue_note_title: "Revisado con feedback de profesionales TCC",
  product_blue_note_text:
    "Psicólogos especializados en TCC revisan y orientan el producto. Deepfriend acompaña; no sustituye terapia.",

  // — Section: how it works
  how_eyebrow: "Así funciona",
  how_title: "Así empieza tu camino.",
  how_step_1_title: "Abres la app. Blue te recibe.",
  how_step_1_text:
    "Sin registros complicados. Sin formularios clínicos. Solo descargar y empezar a hablar — como mandar un mensaje a alguien de confianza.",
  how_step_2_title: "Cuéntale lo que llevas dentro.",
  how_step_2_text:
    "Por chat o por voz, como prefieras. Cuando el día pesa o la noche no llega, Blue escucha — sin juzgar, sin prisa.",
  how_step_3_title: "Poco a poco, notas el cambio.",
  how_step_3_text:
    "Blue recuerda tu historia. Las conversaciones construyen contexto. No es magia: es acompañamiento constante con herramientas que la ciencia respalda.",
  how_disclaimer:
    "Blue es compañía emocional con IA, no un psicólogo. Si necesitas ayuda profesional, te lo diremos con claridad.",

  products_extras_eyebrow: "Incluido en la app",
  products_extras_title: "Herramientas extra para profundizar.",

  product_library_label: "Biblioteca",
  product_library_title: "Conocimiento que calma.",
  product_library_text:
    "Técnicas y recursos validados para la ansiedad, el insomnio y el estrés. Lecturas de menos de un minuto — súper rápidas, efectivas y aplicables al momento. Cada una con referencia al estudio científico que la respalda.",
  product_library_bullet_1: "Ansiedad, insomnio y estrés.",
  product_library_bullet_2: "Menos de un minuto de lectura.",
  product_library_bullet_3: "Aplicables al momento, con referencia al estudio.",

  product_mindfulness_label: "Mindfulness",
  product_mindfulness_title: "Tu espacio de calma.",
  product_mindfulness_text:
    "Vídeos de fondo, sonidos ambiente y meditaciones guiadas para crear la atmósfera perfecta — meditar, descansar o concentrarte, donde quieras.",
  product_mindfulness_bullet_1: "Fondos visuales para inmersión.",
  product_mindfulness_bullet_2: "Paisajes sonoros configurables.",
  product_mindfulness_bullet_3: "Meditaciones guiadas paso a paso.",

  // — Privacy commitment
  privacy_eyebrow: "Compromiso de privacidad",
  privacy_title:
    "Nunca vendemos ni compartimos tus datos. Nunca. Bajo ningún contexto.",
  privacy_text:
    "Deepfriend es independiente: sin inversores, sin agencias, sin gobierno. Lo que compartes con Blue queda entre tú y Blue. Este principio no cambia.",
  privacy_point_1: "Sin venta de datos.",
  privacy_point_2: "Sin compartición con terceros.",
  privacy_point_3: "Sin inversores externos.",
  privacy_point_4: "Cifrado HTTPS extremo a extremo en tránsito.",
  privacy_point_5:
    "Prácticas de seguridad conformes a los estándares de la industria para datos de salud, incluyendo los requisitos HIPAA.",

  // — Final CTA
  cta_title: "Empieza hoy. Tu primer paso es gratis.",
  cta_text:
    "Disponible en Google Play. Una descarga, sin pagar, para conocer a Blue.",
  cta_button: "Descargar en Google Play",

  // — About
  about_eyebrow: "Acerca de Deepfriend",
  about_title:
    "Una iniciativa independiente para acercar la psicología basada en evidencia.",
  about_intro:
    "Deepfriend nace de una experiencia personal: ver de cerca la falta de ayuda real en salud mental y descubrir, en ese proceso, que la TCC es la única gran rama de la psicología con base científica sólida. Esta web cuenta cómo y por qué.",

  about_mission_title: "Misión",
  about_mission_text:
    "Hacer accesible la psicología basada en evidencia. Ofrecer una compañía emocional de calidad, científica, privada y libre de intereses comerciales sobre tus datos.",
  about_values_title: "Valores",
  about_values_text:
    "Ciencia primero. Privacidad real. Accesibilidad. Honestidad sobre lo que la tecnología puede y no puede hacer por tu salud mental.",

  about_story_title: "Por qué Deepfriend",
  about_story_text:
    "La idea nace después de que una persona cercana atravesara una depresión severa. En ese proceso comprobé las carencias de los servicios públicos y descubrí que gran parte de la psicología sigue sin basarse en evidencia. Tras investigar, encontré la TCC, la única rama de la psicología con respaldo científico sólido. Con la mentoría de Adrián González, profesional de la TCC, decidí construir Deepfriend de una forma segura y eficaz.",

  about_pablo_title: "Fundador",
  about_pablo_role: "Ingeniero de software · Barcelona, España",
  about_pablo_name: "Pablo Vallejo",
  about_pablo_text:
    "Ingeniero de software con experiencia en producto. Deepfriend es mi forma de aportar al campo de la salud mental: combinar tecnología con conocimiento científico riguroso para crear algo útil de verdad, sin atajos.",

  about_psy_title: "Asesor clínico",
  about_psy_role: "Psicólogo TCC",
  about_psy_name: "Adrián González",
  about_psy_text:
    "Psicólogo especializado en terapia cognitivo-conductual. Supervisa los flujos clínicos y técnicas de Deepfriend para asegurar que todo lo que llega a los usuarios está basado en evidencia.",

  about_independent_title: "Un proyecto independiente",
  about_independent_text:
    "Deepfriend ha sido creado por una sola persona, con el asesoramiento de un profesional. No somos una multinacional. Esa es exactamente la razón por la que podemos comprometernos a no vender tus datos: no respondemos ante inversores.",

  // — Contact
  contact_eyebrow: "Contacto",
  contact_title: "Hablamos. Tu feedback mejora Deepfriend.",
  contact_text:
    "Deepfriend se construye escuchando. Si tienes preguntas, ideas, críticas constructivas o necesitas ayuda con la app, escríbenos. Leo todos los correos personalmente.",
  contact_email_title: "Correo general",
  contact_help_title: "Soporte",
  contact_response_title: "Tiempo de respuesta",
  contact_response_text: "Habitualmente respondemos en 24–48 horas laborables.",

  // — Banner titles for legal pages
  banner_about_title: "Acerca de Deepfriend",
  banner_contact_title: "Ponte en contacto",
  banner_privacy_policy_title:
    "Política de privacidad",
  banner_legal_terms_title: "Términos legales",

  // — Language switcher
  lang_switch_label: "Idioma",

  // — Misc UI
  ui_learn_more: "Saber más",
  ui_back_home: "Volver al inicio",
} as const;

export type TranslationKey = keyof typeof es;
export type TranslationDictionary = Record<TranslationKey, string>;

const en: TranslationDictionary = {
  nav_about: "About",
  nav_contact: "Contact",
  nav_cta: "Download",

  footer_tagline:
    "AI emotional companion grounded in CBT science. Crafted in Spain.",
  footer_product: "Product",
  footer_product_blue: "Blue AI",
  footer_product_mindfulness: "Mindfulness",
  footer_product_library: "Library",
  footer_company: "Company",
  footer_company_about: "About",
  footer_company_contact: "Contact",
  footer_legal: "Legal",
  footer_legal_privacy: "Privacy Policy",
  footer_legal_terms: "Terms of Use",
  footer_contact_title: "Contact",
  footer_lang_title: "Language",
  footer_copyright: "All rights reserved.",
  footer_madein: "Made with care in Spain.",

  head_home_title: "Deepfriend",
  head_about_title: "About",
  head_contact_title: "Contact",
  head_legal_terms_title: "Legal terms",
  head_privacy_policy_title: "Privacy policy",

  hero_eyebrow: "Emotional companion · Science-based",
  hero_title: "Feel relief. Reclaim your calm.",
  hero_highlight: "relief",
  hero_subtitle:
    "When your mind won't stop, Blue listens — no judgment, no rush. Evidence-based methods for anxiety, stress and insomnia. Private. Available 24/7.",
  hero_cta_primary: "Download on Google Play",
  hero_cta_secondary: "See how it works",
  hero_micro_rating: "Ratings on Google Play",
  hero_micro_downloads: "+1,000 people have already tried Blue",
  hero_micro_privacy: "Data never sold",

  trust_cbt: "CBT-centered",
  trust_clinical: "External clinical review",
  trust_privacy: "Data never sold",
  trust_24_7: "Available 24/7",

  science_eyebrow: "Why this is different",
  science_title: "You've tried other things. This is built to work.",
  science_highlight: "work",
  science_text:
    "It's normal to doubt. Many apps promise calm with nice phrases — with no scientific basis. Deepfriend is different: every technique Blue uses has been validated through the scientific method. CBT is the core; everything else is complementary, always evidence-based.",
  science_diagram_thought: "Thought",
  science_diagram_emotion: "Emotion",
  science_diagram_behavior: "Behavior",
  science_pillar_1_title: "Published, traceable methods",
  science_pillar_1_text:
    "Cognitive restructuring, gradual exposure, sleep hygiene — techniques backed by peer-reviewed literature.",
  science_pillar_2_title: "CBT-centered, multimodal with evidence",
  science_pillar_2_text:
    "Blue doesn't improvise. It starts from the cognitive behavioral framework — the standard with the strongest empirical backing — and integrates other validated techniques when they add value.",
  science_pillar_3_title: "Reviewed by CBT professionals",
  science_pillar_3_text:
    "Specialized psychologists review the product and provide ongoing feedback. No assumptions — external clinical judgment.",

  products_blue_eyebrow: "Main product",
  product_blue_label: "Blue AI",
  product_blue_title: "Blue. There when you need it.",
  product_blue_text:
    "A presence that truly listens. To vent, think out loud, or feel accompanied — no judgment, no rush. Like that friend you trust, with tools that don't improvise.",
  product_blue_bullet_1: "Talk whenever you need to — relief from the very first conversation.",
  product_blue_bullet_2: "Chat and voice calls — choose what feels most comfortable.",
  product_blue_bullet_3: "Gets to know you over time — remembers what matters and accompanies you with context.",
  product_blue_note_title: "Reviewed with feedback from CBT professionals",
  product_blue_note_text:
    "Psychologists specialized in CBT review and guide the product. Deepfriend accompanies; it doesn't replace therapy.",

  how_eyebrow: "How it works",
  how_title: "This is how your journey begins.",
  how_step_1_title: "Open the app. Blue welcomes you.",
  how_step_1_text:
    "No complicated signup. No clinical forms. Just download and start talking — like texting someone you trust.",
  how_step_2_title: "Tell Blue what's on your mind.",
  how_step_2_text:
    "By chat or voice, however you prefer. When the day weighs on you or sleep won't come, Blue listens — no judgment, no rush.",
  how_step_3_title: "Gradually, you notice the change.",
  how_step_3_text:
    "Blue remembers your story. Conversations build context. It's not magic: it's steady companionship with tools science supports.",
  how_disclaimer:
    "Blue is AI emotional companionship, not a psychologist. If you need professional help, we'll tell you clearly.",

  products_extras_eyebrow: "Included in the app",
  products_extras_title: "Extra tools to go deeper.",

  product_library_label: "Library",
  product_library_title: "Knowledge that calms.",
  product_library_text:
    "Validated techniques and resources for anxiety, insomnia and stress. Reads in under a minute — super fast, effective and ready to use right away. Each one with a reference to the scientific study behind it.",
  product_library_bullet_1: "Anxiety, insomnia and stress.",
  product_library_bullet_2: "Under a minute to read.",
  product_library_bullet_3: "Use right away, with study reference.",

  product_mindfulness_label: "Mindfulness",
  product_mindfulness_title: "Your calm space.",
  product_mindfulness_text:
    "Background videos, ambient sounds and guided meditations to create the perfect atmosphere — meditate, rest or focus, wherever you are.",
  product_mindfulness_bullet_1: "Immersive visual backgrounds.",
  product_mindfulness_bullet_2: "Customizable soundscapes.",
  product_mindfulness_bullet_3: "Step-by-step guided meditations.",

  privacy_eyebrow: "Privacy commitment",
  privacy_title:
    "We never sell or share your data. Never. Under no circumstances.",
  privacy_text:
    "Deepfriend is independent: no investors, no agencies, no governments. What you share with Blue stays between you and Blue. This principle will not change.",
  privacy_point_1: "No data selling.",
  privacy_point_2: "No third-party sharing.",
  privacy_point_3: "No outside investors.",
  privacy_point_4: "End-to-end HTTPS encryption in transit.",
  privacy_point_5:
    "Security practices aligned with industry standards for health data, including HIPAA requirements.",

  cta_title: "Start today. Your first step is free.",
  cta_text:
    "Available on Google Play. One download, no payment, to meet Blue.",
  cta_button: "Download on Google Play",

  about_eyebrow: "About Deepfriend",
  about_title:
    "An independent initiative to bring evidence-based psychology closer.",
  about_intro:
    "Deepfriend was born from a personal experience: seeing first-hand how little real help exists in mental health, and discovering, in that process, that CBT is the only major branch of psychology with a solid scientific foundation. This page tells how and why.",

  about_mission_title: "Mission",
  about_mission_text:
    "Make evidence-based psychology accessible. Offer quality emotional companionship that is scientific, private and free from commercial interest over your data.",
  about_values_title: "Values",
  about_values_text:
    "Science first. True privacy. Accessibility. Honesty about what technology can and cannot do for your mental health.",

  about_story_title: "Why Deepfriend",
  about_story_text:
    "The idea was born after a close person went through a severe depression. I saw the gaps in public services and learnt that much of psychology still isn't based on evidence. After researching, I found CBT, the only branch of psychology with strong scientific backing. With the mentorship of Adrián González, a CBT professional, I built Deepfriend in a safe and effective way.",

  about_pablo_title: "Founder",
  about_pablo_role: "Software engineer · Barcelona, Spain",
  about_pablo_name: "Pablo Vallejo",
  about_pablo_text:
    "Software engineer with product experience. Deepfriend is my way of contributing to mental health: combining technology with rigorous scientific knowledge to build something truly useful, without shortcuts.",

  about_psy_title: "Clinical advisor",
  about_psy_role: "CBT psychologist",
  about_psy_name: "Adrián González",
  about_psy_text:
    "Psychologist specialized in cognitive behavioral therapy. He supervises Deepfriend's clinical flows and techniques to ensure everything that reaches users is based on evidence.",

  about_independent_title: "An independent project",
  about_independent_text:
    "Deepfriend has been built by a single person, advised by a professional. We are not a multinational. That is precisely why we can commit to not selling your data: we do not answer to investors.",

  contact_eyebrow: "Contact",
  contact_title: "Let's talk. Your feedback makes Deepfriend better.",
  contact_text:
    "Deepfriend is built by listening. If you have questions, ideas, constructive criticism, or need help with the app, write to us. I read every email personally.",
  contact_email_title: "General email",
  contact_help_title: "Support",
  contact_response_title: "Response time",
  contact_response_text: "We usually reply within 24–48 business hours.",

  banner_about_title: "About Deepfriend",
  banner_contact_title: "Get in touch",
  banner_privacy_policy_title: "Privacy policy",
  banner_legal_terms_title: "Legal terms",

  lang_switch_label: "Language",

  ui_learn_more: "Learn more",
  ui_back_home: "Back to home",
};

const de: TranslationDictionary = {
  nav_about: "Über uns",
  nav_contact: "Kontakt",
  nav_cta: "Herunterladen",

  footer_tagline:
    "KI-Begleitung für emotionales Wohlbefinden, fundiert in der KVT-Wissenschaft. Mit Sorgfalt in Spanien entwickelt.",
  footer_product: "Produkt",
  footer_product_blue: "Blue AI",
  footer_product_mindfulness: "Mindfulness",
  footer_product_library: "Bibliothek",
  footer_company: "Unternehmen",
  footer_company_about: "Über uns",
  footer_company_contact: "Kontakt",
  footer_legal: "Rechtliches",
  footer_legal_privacy: "Datenschutzerklärung",
  footer_legal_terms: "Nutzungsbedingungen",
  footer_contact_title: "Kontakt",
  footer_lang_title: "Sprache",
  footer_copyright: "Alle Rechte vorbehalten.",
  footer_madein: "Mit Sorgfalt in Spanien gemacht.",

  head_home_title: "Deepfriend",
  head_about_title: "Über uns",
  head_contact_title: "Kontakt",
  head_legal_terms_title: "Rechtliche Hinweise",
  head_privacy_policy_title: "Datenschutzerklärung",

  hero_eyebrow: "Emotionale Begleitung · Wissenschaftlich fundiert",
  hero_title: "Spüre Erleichterung. Finde deine Ruhe wieder.",
  hero_highlight: "Erleichterung",
  hero_subtitle:
    "Wenn der Kopf nicht zur Ruhe kommt, hört Blue zu — ohne Urteil, ohne Eile. Evidenzbasierte Methoden bei Angst, Stress und Schlaflosigkeit. Privat. Rund um die Uhr verfügbar.",
  hero_cta_primary: "Bei Google Play herunterladen",
  hero_cta_secondary: "So funktioniert es",
  hero_micro_rating: "Bewertungen bei Google Play",
  hero_micro_downloads: "+1.000 Menschen haben Blue bereits ausprobiert",
  hero_micro_privacy: "Daten werden nie verkauft",

  trust_cbt: "KVT im Zentrum",
  trust_clinical: "Externe klinische Prüfung",
  trust_privacy: "Daten nie verkauft",
  trust_24_7: "Rund um die Uhr",

  science_eyebrow: "Warum das anders ist",
  science_title: "Du hast schon anderes probiert. Dies ist gebaut, um zu funktionieren.",
  science_highlight: "funktionieren",
  science_text:
    "Zweifeln ist normal. Viele Apps versprechen Ruhe mit schönen Worten — ohne wissenschaftliche Grundlage. Deepfriend ist anders: Jede Technik, die Blue nutzt, wurde nach wissenschaftlicher Methode validiert. Die KVT steht im Zentrum; alles andere sind ergänzende, evidenzbasierte Werkzeuge.",
  science_diagram_thought: "Gedanke",
  science_diagram_emotion: "Emotion",
  science_diagram_behavior: "Verhalten",
  science_pillar_1_title: "Publizierte, nachvollziehbare Methoden",
  science_pillar_1_text:
    "Kognitive Umstrukturierung, schrittweise Exposition, Schlafhygiene — Techniken mit Rückhalt in peer-reviewter Literatur.",
  science_pillar_2_title: "KVT im Zentrum, multimodal mit Evidenz",
  science_pillar_2_text:
    "Blue improvisiert nicht. Es baut auf dem kognitiv-verhaltenstherapeutischen Rahmen auf — dem Standard mit dem stärksten empirischen Rückhalt — und integriert andere validierte Techniken, wenn sie Mehrwert bieten.",
  science_pillar_3_title: "Geprüft von KVT-Fachleuten",
  science_pillar_3_text:
    "Spezialisierte Psychologen prüfen das Produkt und geben fortlaufend Feedback. Keine Annahmen — externes klinisches Urteil.",

  products_blue_eyebrow: "Hauptprodukt",
  product_blue_label: "Blue AI",
  product_blue_title: "Blue. Da, wenn du es brauchst.",
  product_blue_text:
    "Eine Präsenz, die dir wirklich zuhört. Zum Reden, laut Denken oder um dich begleitet zu fühlen — ohne Urteil, ohne Eile. Wie ein Freund, dem du vertraust, mit Werkzeugen, die nicht improvisieren.",
  product_blue_bullet_1: "Sprich, wann immer du musst — Erleichterung ab dem ersten Gespräch.",
  product_blue_bullet_2: "Chat und Sprachanruf — wähle, was sich am angenehmsten anfühlt.",
  product_blue_bullet_3: "Lernt dich mit der Zeit kennen — erinnert sich an Wichtiges und begleitet mit Kontext.",
  product_blue_note_title: "Geprüft mit Feedback von KVT-Fachleuten",
  product_blue_note_text:
    "Psychologen mit KVT-Spezialisierung prüfen und begleiten das Produkt. Deepfriend begleitet — es ersetzt keine Therapie.",

  how_eyebrow: "So funktioniert es",
  how_title: "So beginnt dein Weg.",
  how_step_1_title: "Du öffnest die App. Blue empfängt dich.",
  how_step_1_text:
    "Keine komplizierte Anmeldung. Keine klinischen Formulare. Einfach herunterladen und anfangen zu sprechen — wie eine Nachricht an jemanden, dem du vertraust.",
  how_step_2_title: "Erzähl, was in dir vorgeht.",
  how_step_2_text:
    "Per Chat oder Sprache, wie du möchtest. Wenn der Tag schwer ist oder der Schlaf ausbleibt, hört Blue zu — ohne Urteil, ohne Eile.",
  how_step_3_title: "Nach und nach spürst du den Unterschied.",
  how_step_3_text:
    "Blue erinnert sich an deine Geschichte. Gespräche bauen Kontext auf. Keine Magie: beständige Begleitung mit Werkzeugen, die die Wissenschaft stützt.",
  how_disclaimer:
    "Blue ist KI-Begleitung für emotionales Wohlbefinden, kein Psychologe. Wenn du professionelle Hilfe brauchst, sagen wir es dir klar.",

  products_extras_eyebrow: "In der App enthalten",
  products_extras_title: "Extra-Werkzeuge zum Vertiefen.",

  product_library_label: "Bibliothek",
  product_library_title: "Wissen, das beruhigt.",
  product_library_text:
    "Validierte Techniken und Ressourcen bei Angst, Schlaflosigkeit und Stress. Lektüre in unter einer Minute — superschnell, wirksam und sofort anwendbar. Jede mit Verweis auf die wissenschaftliche Studie dahinter.",
  product_library_bullet_1: "Angst, Schlaflosigkeit und Stress.",
  product_library_bullet_2: "Weniger als eine Minute Lesezeit.",
  product_library_bullet_3: "Sofort anwendbar, mit Studienverweis.",

  product_mindfulness_label: "Mindfulness",
  product_mindfulness_title: "Dein Raum der Ruhe.",
  product_mindfulness_text:
    "Hintergrundvideos, Umgebungsgeräusche und geführte Meditationen für die perfekte Atmosphäre — meditieren, ausruhen oder konzentrieren, wo immer du bist.",
  product_mindfulness_bullet_1: "Immersive Hintergründe.",
  product_mindfulness_bullet_2: "Anpassbare Klanglandschaften.",
  product_mindfulness_bullet_3: "Geführte Meditationen Schritt für Schritt.",

  privacy_eyebrow: "Datenschutz-Versprechen",
  privacy_title:
    "Wir verkaufen oder teilen deine Daten nie. Niemals. Unter keinen Umständen.",
  privacy_text:
    "Deepfriend ist unabhängig: keine Investoren, keine Agenturen, keine Regierungen. Was du mit Blue teilst, bleibt zwischen dir und Blue. Dieses Prinzip wird sich nicht ändern.",
  privacy_point_1: "Kein Datenverkauf.",
  privacy_point_2: "Keine Weitergabe an Dritte.",
  privacy_point_3: "Keine externen Investoren.",
  privacy_point_4: "HTTPS-Verschlüsselung bei der Übertragung.",
  privacy_point_5:
    "Sicherheitspraktiken gemäß Branchenstandards für Gesundheitsdaten, einschließlich HIPAA-Anforderungen.",

  cta_title: "Fange heute an. Dein erster Schritt ist kostenlos.",
  cta_text:
    "Verfügbar bei Google Play. Ein Download, kostenlos, um Blue kennenzulernen.",
  cta_button: "Bei Google Play herunterladen",

  about_eyebrow: "Über Deepfriend",
  about_title:
    "Eine unabhängige Initiative, um evidenzbasierte Psychologie zugänglich zu machen.",
  about_intro:
    "Deepfriend ist aus einer persönlichen Erfahrung entstanden: aus nächster Nähe zu sehen, wie wenig echte Hilfe es im Bereich mentale Gesundheit gibt – und dabei zu entdecken, dass die KVT der einzige große Zweig der Psychologie mit solider wissenschaftlicher Grundlage ist. Diese Seite erzählt, wie und warum.",

  about_mission_title: "Mission",
  about_mission_text:
    "Evidenzbasierte Psychologie zugänglich machen. Eine qualitativ hochwertige, wissenschaftliche, private emotionale Begleitung anbieten – frei von kommerziellen Interessen an deinen Daten.",
  about_values_title: "Werte",
  about_values_text:
    "Wissenschaft zuerst. Echte Privatsphäre. Zugänglichkeit. Ehrlichkeit darüber, was Technologie für deine mentale Gesundheit leisten kann und was nicht.",

  about_story_title: "Warum Deepfriend",
  about_story_text:
    "Die Idee entstand, nachdem eine nahestehende Person eine schwere Depression durchlebte. Ich sah die Lücken im öffentlichen Versorgungssystem und erkannte, dass ein großer Teil der Psychologie nicht auf Evidenz beruht. Nach Recherchen fand ich die KVT, den einzigen Zweig mit solidem wissenschaftlichem Fundament. Mit der Beratung von Adrián González, einem KVT-Profi, habe ich Deepfriend sicher und wirksam entwickelt.",

  about_pablo_title: "Gründer",
  about_pablo_role: "Software-Ingenieur · Barcelona, Spanien",
  about_pablo_name: "Pablo Vallejo",
  about_pablo_text:
    "Software-Ingenieur mit Produkterfahrung. Deepfriend ist mein Beitrag zur mentalen Gesundheit: Technologie mit rigorosem wissenschaftlichem Wissen verbinden, um etwas wirklich Nützliches zu bauen – ohne Abkürzungen.",

  about_psy_title: "Klinischer Berater",
  about_psy_role: "KVT-Psychologe",
  about_psy_name: "Adrián González",
  about_psy_text:
    "Psychologe mit Spezialisierung auf kognitive Verhaltenstherapie. Er überwacht die klinischen Abläufe und Techniken von Deepfriend, um sicherzustellen, dass alles, was die Nutzer erreicht, evidenzbasiert ist.",

  about_independent_title: "Ein unabhängiges Projekt",
  about_independent_text:
    "Deepfriend wurde von einer einzelnen Person entwickelt, beraten durch einen Fachmann. Wir sind kein multinationaler Konzern. Genau deshalb können wir uns dazu verpflichten, deine Daten nicht zu verkaufen: Wir sind keinen Investoren verpflichtet.",

  contact_eyebrow: "Kontakt",
  contact_title: "Sprich mit uns. Dein Feedback macht Deepfriend besser.",
  contact_text:
    "Deepfriend entsteht durch Zuhören. Wenn du Fragen, Ideen, konstruktive Kritik hast oder Hilfe mit der App brauchst, schreib uns. Ich lese jede E-Mail persönlich.",
  contact_email_title: "Allgemeine E-Mail",
  contact_help_title: "Support",
  contact_response_title: "Antwortzeit",
  contact_response_text:
    "Wir antworten in der Regel innerhalb von 24–48 Werkstunden.",

  banner_about_title: "Über Deepfriend",
  banner_contact_title: "Kontakt aufnehmen",
  banner_privacy_policy_title: "Datenschutzerklärung",
  banner_legal_terms_title: "Rechtliche Hinweise",

  lang_switch_label: "Sprache",

  ui_learn_more: "Mehr erfahren",
  ui_back_home: "Zurück zur Startseite",
};

export const TranslationTexts: Record<Locale, TranslationDictionary> = {
  es,
  en,
  de,
};
