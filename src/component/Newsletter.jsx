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

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

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
      email: email,
      subscription_date: subscriptionDate,
      source: "13Juneventures Newsletter Signup",
      messageContent: `Hey film lover,

We’re so glad you’re here.

If you’ve found your way to us, then you already know how powerful storytelling can be and around here, we believe stories have the ability to shift mindset, create a change, and bring people together. That’s what FLIP is all about.

So, what’s FLIP?
Short for Film In The Park. It started as a simple idea, let’s create a space where beautiful stories can be told and shared.

We’re not just screening films, we’re building a movement. A vibrant space where filmmakers and film lovers come together to watch, connect and celebrate stories that matter.

So far, so good:
FLIP 1.0 brought over 120 people together. We screened 10 powerful short films and countless connections were made.

FLIP 2.0 is loading… and trust us, it’s going to be even better. (You’ll be the first to know 😉)

Here’s what you can expect from us:

• Film industry updates and real talk on trends

• Early scoop on FLIP events, screenings, and opportunities

• Stories worth sharing from us, and maybe even from you


Kindly Follow us @Officialfilminthepark_ on all social media platforms, so you don’t miss a thing.

Thanks again for joining us.

With love,
The FLIP Team`
    };

        try {
      const subscribeResult = await subscribeToMailchimp(email);


      if (!subscribeResult.success) {
        throw new Error(subscribeResult.message);
      }

      const welcomeEmail = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templates.newsletterMessage,
        templateParams,
        emailjsConfig.publicKey
      );

      const notification = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templates.newsletterNotification,
        {
          email: email,
          subscription_date: subscriptionDate,
        },
        emailjsConfig.publicKey
      );

      if (welcomeEmail.status === 200) {
        setIsSubscribed(true);
        toast.success(subscribeResult.message);
        setEmail("");
      }

      if (notification.status === 200) {
        toast.info("FLIP has been notified.");
      }

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
          className="flex-grow w-[300px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubscribed || isLoading}
        />

        <button
          type="submit"
          className={`px-6 py-3 w-[200px] text-lg font-semibold rounded-md transition-colors focus:outline-none cursor-pointer focus:ring-2 focus:ring-black focus:ring-offset-2 ${isSubscribed
            ? "bg-black hover:bg-black text-white"
            : "bg-[#3EB489] hover:bg-[#267a5c] text-white"
            }`}
          disabled={isSubscribed || isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : isSubscribed ? (
            "Subscribed!"
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
    </section>
  );
};

export default NewsletterCTA;
