const API_URL = "https://supaeval-strapi.azurewebsites.net";
const API_TOKEN =
  "d68ded13890a920bb0014c86f006e7be69d39a424f0f11b94cb518d7452887c0d1da860d565817e5d4eb961dc8384685e9959258de0b965765054e9f884d28ed0b577f9814c3f16fa274f10be27787959092ae8bd59d07bff8a11de7295d2b6ea751d758f5a863d580d0e05f0a3267c25f26039e8cbc5758f193a126822cf832";

async function test() {
  console.log("Testing Strapi API with NEW token...");

  const endpoint = "/api/articles";

  console.log(`\nEndpoint: ${endpoint}`);
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    console.log(`Status: ${response.status} ${response.statusText}`);
    const data = await response.json();
    console.log("Response Data:", JSON.stringify(data, null, 2).slice(0, 1000));
  } catch (error) {
    console.error("Error:", error.message);
  }
}

test();
