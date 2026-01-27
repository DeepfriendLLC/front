import { SystemMessageLevelType, SystemMessageType } from "@/hooks/store";

export async function UpdateSystemMessageAPI(
  jwt: string,
  type: SystemMessageType,
  instructions: string,
  level: SystemMessageLevelType,
) {
  try {
    const response = await fetch("/api/systemMessage/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jwt,
        type,
        instructions,
        level,
      })
    });

    return await response.json();
  } catch (e) {
    console.error("API Error UpdateSystemMessageAPI", e);
  }
};
