import { TherapyType } from "@/store/store";

export async function GetRecommendedTecniquesAPI(
  jwt: string,
  therapyType: TherapyType,
) {
  try {
    const response = await fetch("/api/recommendedTecniques/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jwt,
        therapyType,
      })
    });

    return await response.json();
  } catch (e) {
    console.error("API Error GetRecommendedTecniquesAPI", e);
  }
};
