const WhatsAppButton = ({ service }) => {
  const phone = "2347042584760";

  const handleClick = () => {
    const message = `Hello, I am interested in the ${service}. Please give me more details.`;
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-600 text-white text-xl font-bold px-18 py-4 rounded-4xl shadow-xl shadow-emerald-800 flex m-auto mt-10 cursor-pointer"
    >
      Chat on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
