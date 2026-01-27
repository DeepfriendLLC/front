import { SystemMessageLevelType, TherapyType } from "@/hooks/store";

export async function GetPhaseInstructionsAPI(
  jwt: string,
  therapyType: TherapyType,
  phaseNumber: string,
  level: SystemMessageLevelType,
) {
  try {
    const response = await fetch("/api/phaseInstructions/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jwt,
        therapyType,
        phaseNumber,
        level,
      })
    });

    return await response.json();
  } catch (e) {
    console.error("API Error GetPhaseInstructionsAPI", e);
  }
};
