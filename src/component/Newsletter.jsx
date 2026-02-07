import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import { emailjsConfig } from "../config/email";
import { subscribeToMailchimp } from "../utilitis/subscribe";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    const subscriptionDate = new Date().toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const templateParams = {
      email,
      subscription_date: subscriptionDate,
      source: "13Juneventures Newsletter Signup",
      messageContent: `Hey film lover, thanks for subscribing!`,
    };

    try {
      // 1️⃣ Subscribe to Mailchimp
      const subscribeResult = await subscribeToMailchimp(email);

      if (!subscribeResult.success) {
        throw new Error(subscribeResult.message);
      }

      // 2️⃣ Send welcome email to subscriber
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templates.newsletterMessage,
        templateParams,
        emailjsConfig.publicKey
      );

      // 3️⃣ Notify business owner
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templates.newsletterNotification,
        { email, subscription_date: subscriptionDate },
        emailjsConfig.publicKey
      );

      setIsSubscribed(true);
      toast.success(subscribeResult.message);
      setEmail("");
    } catch (error) {
      console.error("Subscription Error:", error);
      toast.error(error.message || "Subscription failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubscribed || isLoading}
          className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black w-[300px] bg-white text-black"
        />
        <button
          type="submit"
          disabled={isSubscribed || isLoading}
          className={`px-6 py-3 w-[200px] text-lg font-semibold rounded-md transition-colors focus:outline-none cursor-pointer focus:ring-2 focus:ring-black focus:ring-offset-2 ${
            isSubscribed
              ? "bg-black hover:bg-black text-white"
              : "bg-[#3EB489] hover:bg-[#267a5c] text-white"
          }`}
        >
          {isLoading ? "Processing..." : isSubscribed ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
    </section>
  );
};

export default NewsletterCTA;
