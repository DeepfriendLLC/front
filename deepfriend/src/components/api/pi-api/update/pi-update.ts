import { SystemMessageLevelType, TherapyType } from "@/store/store";

export async function UpdatePhaseInstructionsAPI(
  jwt: string,
  therapyType: TherapyType,
  phaseNumber: string,
  title: string,
  instructions: string,
  level: SystemMessageLevelType,
) {
  try {
    const response = await fetch("/api/phaseInstructions/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jwt,
        therapyType,
        phaseNumber,
        title,
        instructions,
        level,
      })
    });

    return await response.json();
  } catch (e) {
    console.error("API Error UpdatePhaseInstructionsAPI", e);
  }
};
