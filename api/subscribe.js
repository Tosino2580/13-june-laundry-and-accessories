// /api/subscribe.js
import { Buffer } from "buffer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const PREFIX = process.env.MAILCHIMP_PREFIX;

  if (!API_KEY || !LIST_ID || !PREFIX) {
    console.error("Mailchimp env variables missing");
    return res.status(500).json({ error: "Mailchimp env variables not set" });
  }

  const url = `https://${PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    const data = await response.json();

     console.log("MAILCHIMP RAW RESPONSE:", data);

    if (!res.ok) {
  // If Mailchimp says "Member Exists", treat it as success
  if (data.title === "Member Exists") {
    return { success: true, message: "You're already subscribed!" };
  }

  return { success: false, message: data.detail || "Mailchimp subscription failed" };
}

    return res.status(200).json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error("Mailchimp fetch failed:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
