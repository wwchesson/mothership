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

const DonateDropdown = ({ option, openId, setOpenId }: { option: DonateOption; openId: Method | null; setOpenId: (id: Method | null) => void }) => {
  const open = openId === option.id;
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div className="border-b border-gray-900/20 last:border-0">
      <button
        className="w-full flex justify-between items-center py-2 text-xs font-semibold md:text-sm md:font-bold 2xl:text-lg 2xl:font-extrabold uppercase tracking-widest text-gray-900 hover:opacity-70 transition-opacity"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        onClick={() => setOpenId(open ? null : option.id)}
      >
        {option.label}
        <span className="text-xs md:text-sm 2xl:text-base">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="pb-3 flex flex-col items-center gap-2">
          {/* TODO: Replace with <img src={qrImage} /> once QR assets are added */}
          <div className="bg-white/60 w-32 h-32 flex items-center justify-center text-xs text-gray-500 text-center p-2">
            {option.qrPlaceholder}
          </div>

          {option.zelleFallback ? (
            <p className="text-xs text-gray-700">{option.zelleFallback}</p>
          ) : (
            isMobile && option.deepLink && (
              <a
                href={option.deepLink}
                className="bg-gray-900 text-white text-xs uppercase tracking-widest px-4 py-2 hover:bg-gray-700 transition-colors"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {option.deepLinkLabel}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
};

const Donate = () => {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState<Method | null>(null);

  return (
    <div className="flex flex-col gap-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
      {OPTIONS.map((opt) => (
        <DonateDropdown key={opt.id} option={opt} openId={openId} setOpenId={setOpenId} />
      ))}

      <div className="mt-3 border-t border-gray-900/20 pt-3">
        <button
          onClick={() => navigate("/stripe")}
          className="w-full bg-gray-900 text-white text-xs font-semibold md:text-sm md:font-bold 2xl:text-lg 2xl:font-extrabold uppercase tracking-widest py-2 hover:bg-gray-700 transition-colors"
        >
          Donate by Card
        </button>
      </div>
    </div>
  );
};

export default Donate;
