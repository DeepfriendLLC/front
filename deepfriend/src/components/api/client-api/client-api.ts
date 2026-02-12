
import { AllowedLanguagesEncodedType } from "@/hooks/slice/systemLanguage";

export async function SendMetricsSessionFocusAPI(
  sessionId: string,
  route: string,
  section: string,
  language: AllowedLanguagesEncodedType,
) {
  try {
    const response = await fetch("/api/metrics/focus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sessionId,
        route,
        section,
        language,
      })
    });

    return await response.json();
  } catch (e) {
    console.error("API Error SendMetricsSessionFocusAPI", e);
  }
};

export async function SendMetricsSessionClickAPI(
  sessionId: string,
  route: string,
  section: string,
  clickType: "in" | "out" | "social",
  language: AllowedLanguagesEncodedType,
) {
  try {
    const response = await fetch("/api/metrics/click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sessionId,
        route,
        section,
        clickType,
        language,
      })
    });

    return await response.json();
  } catch (e) {
    console.error("API Error SendMetricsSessionClickAPI", e);
  }
};
