import { SystemMessageLevelType, SystemMessageType } from "@/store/store";

export async function GetSystemMessageAPI(
  jwt: string,
  type: SystemMessageType,
  level: SystemMessageLevelType,
) {
  try {
    const response = await fetch("/api/systemMessage/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jwt,
        type,
        level,
      })
    });

    return await response.json();
  } catch (e) {
    console.error("API Error GetSystemMessageAPI", e);
  }
};
