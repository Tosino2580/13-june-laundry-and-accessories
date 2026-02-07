/* eslint-disable no-unused-vars */
export async function subscribeToMailchimp(email) {
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, message: data.error || "Mailchimp subscription failed" };
    }

    return { success: true, message: data.message || "Subscribed successfully!" };

  } catch (err) {
    return { success: false, message: "Network error" };
  }
}
