import { useState } from "react";
import { useNavigate } from "react-router-dom";

// TODO: Replace placeholder values with real usernames/QR images
// TODO: Add QR code images to src/assets and import them here
// VENMO_USERNAME, CASHAPP_CASHTAG, ZELLE_CONTACT

type Method = "venmo" | "cashapp" | "zelle";

interface DonateOption {
  id: Method;
  label: string;
  deepLink: string | null;
  deepLinkLabel: string | null;
  zelleFallback?: string;
  qrPlaceholder: string;
}

const OPTIONS: DonateOption[] = [
  {
    id: "venmo",
    label: "Venmo",
    deepLink: "venmo://paycharge?txn=pay&recipients=VENMO_USERNAME",
    deepLinkLabel: "Open Venmo",
    qrPlaceholder: "Venmo QR code coming soon",
  },
  {
    id: "cashapp",
    label: "Cash App",
    deepLink: "https://cash.app/$CASHTAG",
    deepLinkLabel: "Open Cash App",
    qrPlaceholder: "Cash App QR code coming soon",
  },
  {
    id: "zelle",
    label: "Zelle",
    deepLink: null,
    deepLinkLabel: null,
    zelleFallback: "Send to: ZELLE_CONTACT",
    qrPlaceholder: "Zelle QR code coming soon",
  },
];

const Donate = () => {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState<Method | null>(null);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const active = OPTIONS.find((o) => o.id === openId) ?? null;

  return (
    <div className="flex flex-row w-full  md:h-[25vh] 2xl:h-[32.5vh]" style={{ fontFamily: "Montserrat, sans-serif" }}>
      {/* Left half — buttons */}
      <div className="flex flex-col justify-center gap-2 w-1/2 pr-2">
        {OPTIONS.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setOpenId(opt.id)}
            className={`w-full py-2 text-xs font-semibold md:text-sm md:font-bold uppercase tracking-widest border transition-colors ${
              openId === opt.id
                ? "bg-gray-900 text-white border-gray-900"
                : "text-gray-900 border-gray-900/20 hover:opacity-70"
            }`}
          >
            {opt.label}
          </button>
        ))}
        <button
          onClick={() => navigate("/stripe")}
          className="w-full bg-[rgb(226_107_67)] text-white text-xs font-semibold md:text-sm md:font-bold uppercase tracking-widest py-2 hover:bg-gray-700 transition-colors mt-1"
        >
          By Card
        </button>
      </div>

      {/* Right half — QR panel */}
      <div className="flex flex-col items-center justify-center w-1/2 pl-2">
        {active ? (
          <>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-2">{active.label}</p>
            {/* TODO: Replace with <img src={qrImage} /> once QR assets are added */}
            <div className="bg-white/60 w-36 h-36 flex items-center justify-center text-xs text-gray-500 text-center p-2">
              {active.qrPlaceholder}
            </div>
            {active.zelleFallback ? (
              <p className="text-xs text-gray-700 mt-2">{active.zelleFallback}</p>
            ) : (
              isMobile && active.deepLink && (
                <a
                  href={active.deepLink}
                  className="mt-2 bg-gray-900 text-white text-xs uppercase tracking-widest px-3 py-1.5 hover:bg-gray-700 transition-colors"
                >
                  {active.deepLinkLabel}
                </a>
              )
            )}
          </>
        ) : (
          <p className="text-xs text-gray-500 text-center uppercase tracking-widest">Select a method</p>
        )}
      </div>
    </div>
  );
};

export default Donate;
