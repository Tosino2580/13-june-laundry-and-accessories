export async function subscribeToMailchimp(email) {
  return await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  }).then(res => res.json());
}
