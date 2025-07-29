const baseURL = `https://api.dfbubbles.com`;
const WEB_API_KEY = `7bc1bf04-56f3-4321-a867-ce90e2873961`;

export async function CreateStatView(route: string, userAgent: string, language: string) {
  try {
    await fetch(`${baseURL}/789cfa081959/create/view`, {
      method: "POST",
      headers: {
        'apikey': WEB_API_KEY,
      },
      body: JSON.stringify({
        route,
        userAgent,
        language,
      }),
    });
  } catch (e) {
    console.log(`Error sending stats CreateStatView ${e}`);
  }
};
