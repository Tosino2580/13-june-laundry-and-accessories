export async function subscribeToMailchimp(email) {
  const API_KEY = import.meta.env.VITE_MAILCHIMP_API_KEY;
  const LIST_ID = import.meta.env.VITE_MAILCHIMP_LIST_ID;
  const PREFIX = import.meta.env.VITE_MAILCHIMP_PREFIX;

  const url = `https://${PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const body = {
    email_address: email,
    status: "subscribed"
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `apikey ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return { ok: response.ok, data };
}
