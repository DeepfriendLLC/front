import { TherapyType } from "@/store/store";

export async function UpdatePhaseInstructionsAPI(
  jwt: string,
  therapyType: TherapyType,
  tecniques: string,
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
      })
    });

    return await response.json();
  } catch (e) {
    console.error("API Error UpdatePhaseInstructionsAPI", e);
  }
};
