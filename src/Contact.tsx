import { useState } from "react";

// TODO: Install emailjs-com and add credentials to .env
// npm install @emailjs/browser
// VITE_EMAILJS_SERVICE_ID=service_...
// VITE_EMAILJS_TEMPLATE_ID=template_...
// VITE_EMAILJS_PUBLIC_KEY=...

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <p className="text-gray-900 text-xs md:text-sm 2xl:text-base font-semibold md:font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
        Message sent! We'll be in touch.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 md:gap-3 2xl:gap-2 2xl:h-[32.5vh]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
        value={form.name}
        onChange={handleChange}
        className="bg-white/70 px-2 py-1 md:px-3 md:py-2 2xl:px-4 2xl:py-3 text-xs md:text-sm 2xl:text-base text-gray-900 placeholder-gray-800 placeholder:font-semibold placeholder:uppercase placeholder:tracking-widest outline-none"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={handleChange}
        className="bg-white/70 px-2 py-1 md:px-3 md:py-2 2xl:px-4 2xl:py-3 text-xs md:text-sm 2xl:text-base text-gray-900 placeholder-gray-800 placeholder:font-semibold placeholder:uppercase placeholder:tracking-widest outline-none"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={4}
        value={form.message}
        onChange={handleChange}
        className="bg-white/70 px-2 py-1 md:px-3 md:py-2 2xl:px-4 2xl:py-3 text-xs md:text-sm 2xl:text-base text-gray-900 placeholder-gray-800 placeholder:font-semibold placeholder:uppercase placeholder:tracking-widest outline-none resize-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-gray-900 text-white uppercase tracking-widest text-xs flex justify-center items-center 2xl:h-[4vh] font-semibold md:text-sm md:font-bold 2xl:text-lg 2xl:font-extrabold py-2 2xl:py-3 hover:bg-gray-700 transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send"}
      </button>
      {status === "error" && (
        <p className="text-red-700 text-xs md:text-sm 2xl:text-base">Something went wrong. Try again.</p>
      )}
    </form>
  );
};

export default Contact;
