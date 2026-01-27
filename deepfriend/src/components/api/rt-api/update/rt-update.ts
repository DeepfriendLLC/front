import { SystemMessageLevelType, TherapyType } from "@/hooks/store";

export async function UpdateRecommendedTecniquesAPI(
  jwt: string,
  therapyType: TherapyType,
  tecniques: string,
  level: SystemMessageLevelType,
) {
  try {
    const response = await fetch("/api/recommendedTecniques/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jwt,
        therapyType,
        tecniques,
        level,
      })
    });

    return await response.json();
  } catch (e) {
    console.error("API Error UpdatePhaseInstructionsAPI", e);
  }
};
