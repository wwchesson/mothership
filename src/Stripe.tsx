// TODO: Add STRIPE_PUBLISHABLE_KEY and STRIPE_PRICE_ID to .env
// VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
// VITE_STRIPE_PRICE_ID=price_...

const Stripe = () => {
  const handleDonate = async () => {
    // Will redirect to Stripe Checkout once credentials are added
    alert("Stripe not yet configured.");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6 bg-gray-900 text-white px-4">
      <h1 className="text-3xl uppercase tracking-widest" style={{ fontFamily: "Montserrat, sans-serif" }}>
        Donate
      </h1>
      <p className="text-gray-400 text-center max-w-sm">
        Support us with a one-time donation via card.
      </p>
      <button
        onClick={handleDonate}
        className="bg-[#2cb0d8] hover:bg-[#1a90b8] text-white uppercase tracking-widest px-10 py-4 text-lg transition-colors"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Donate Now
      </button>
    </main>
  );
};

export default Stripe;
