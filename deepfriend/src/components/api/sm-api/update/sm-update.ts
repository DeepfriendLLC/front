import { SystemMessageType } from "@/store/store";

export async function UpdateSystemMessageAPI(
  jwt: string,
  type: SystemMessageType,
  instructions: string,
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
      })
    });

    return await response.json();
  } catch (e) {
    console.error("API Error UpdateSystemMessageAPI", e);
  }
};
