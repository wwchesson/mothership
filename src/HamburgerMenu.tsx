import React, { useState } from "react";

const navLinks = [ "mission", "contact", "donate", "tickets"];

interface HamburgerMenuProps {
  onNavigate: (item: string) => void;
}

const HamburgerMenu = ({ onNavigate }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="flex flex-col justify-center gap-[5px] w-6 h-6 mr-[1rem] shrink-0"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <span className="block w-full h-[2px] bg-white [filter:drop-shadow(0_0_4px_#fff)]" />
        <span className="block w-full h-[2px] bg-white [filter:drop-shadow(0_0_4px_#fff)]" />
        <span className="block w-full h-[2px] bg-white [filter:drop-shadow(0_0_4px_#fff)]" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setIsOpen(false)}
        >
          {/* Slide-in panel */}
          <div
            className="absolute left-0 top-0 h-full w-[45vw] flex flex-col pt-10 px-8"
            style={{
              background:
                "linear-gradient(160deg, rgba(10,10,30,0.97) 0%, rgba(44,176,216,0.18) 100%)",
              backdropFilter: "blur(8px)",
              borderRight: "1px solid rgba(255,255,255,0.1)",
              animation: "slideInLeft 0.28s cubic-bezier(0.4,0,0.2,1) both",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl leading-none [filter:drop-shadow(0_0_6px_#fff)]"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Nav links */}
            <nav className="flex flex-col gap-8 mt-[2rem]">
              {navLinks.map((item) => (
                <button
                  key={item}
                  className="text-white text-2xl uppercase tracking-widest [filter:drop-shadow(0_0_4px_#fff)_drop-shadow(0_0_12px_#fff)] active:opacity-70 text-left"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  onClick={() => { onNavigate(item); setIsOpen(false); }}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default HamburgerMenu;
