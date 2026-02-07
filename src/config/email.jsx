export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  templates: {
    newsletterMessage: import.meta.env.VITE_EMAILJS_TEMPLATE_NEWSLETTER,
    newsletterNotification: import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFICATION,
  },
};
