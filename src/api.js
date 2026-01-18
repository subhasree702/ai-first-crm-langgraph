export const BASE_URL = "http://127.0.0.1:8000";

export async function logInteractionAPI(payload) {
  const res = await fetch(`${BASE_URL}/interactions/log`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function getInteractions() {
  const res = await fetch(`${BASE_URL}/interactions/log`);
  return res.json();
}

export async function getStatus() {
  const res = await fetch(`${BASE_URL}/`);
  return res.json();
}
