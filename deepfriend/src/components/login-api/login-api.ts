
export async function LoginAPI(
  email: string,
  password: string,
) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
      })
    });

    return await response.json();
  } catch (e) {
    console.error("API Error LoginAPI", e);
  }
};
