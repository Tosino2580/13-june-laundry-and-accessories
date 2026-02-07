import fetch from "node-fetch"; // only needed if Node <18
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

    if (!response.ok) {
      if (data.title === "Member Exists") {
        return res.status(200).json({ message: "Already subscribed" });
      }
      return res.status(400).json({ error: data.detail || "Mailchimp subscription failed" });
    }

    return res.status(200).json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error("Mailchimp API error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
