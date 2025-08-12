
import { SystemColorType } from "@/store/slice/systemColor";
import { AllowedLanguagesEncodedType } from "@/store/slice/systemLanguage";

export async function SendMetricsSessionFocusAPI(
  sessionId: string,
  route: string,
  section: string,
  color: SystemColorType,
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
        color,
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
  color: SystemColorType,
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
        color,
        language,
      })
    });

    return await response.json();
  } catch (e) {
    console.error("API Error SendMetricsSessionClickAPI", e);
  }
};
