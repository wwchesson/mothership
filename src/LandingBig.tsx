import React from "react";
import { useSearchParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  UFO,
  spacebg,
  MOTHERSHIP,
  sunrastamp,
  www,
  ufogold,
  clinton,
  butler,
  einstein,
} from "./assets";
import HamburgerMenu from "./HamburgerMenu";
import Mission from "./Mission";
import Contact from "./Contact";
import Donate from "./Donate";

const fills = [
  "rgb(244, 231, 152)",
  "transparent",
  "rgb(226, 107, 67)",
  "transparent",
  "#2cb0d8",
];

const TAB_ITEMS = ["mission", "contact", "donate", "tickets"] as const;
type Tab = "mission" | "contact" | "donate";

const LandingBig = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 601px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isShortTablet = useMediaQuery({query: "(max-height: 1000px)"})
  console.log("isShortTablet", isShortTablet)
  const isMobileSm = useMediaQuery({ query: "(max-width: 460px)" });
  const isMobileLg = useMediaQuery({
    query: "(min-width: 460px) and (max-width: 600px)",
  });



  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = (searchParams.get("tab") as Tab) || "mission";

  const EVENTBRITE_URL = "https://www.eventbrite.com"; // TODO: replace with actual URL

  const handleNav = (item: string) => {
    if (item === "tickets") {
      window.open(EVENTBRITE_URL, "_blank", "noopener,noreferrer");
    } else {
      setSearchParams({ tab: item });
    }
  };

  //mobile small and large

  //top-left, top-right, bottom-right, bottom-left
  const getPoints = () => {
    if (isDesktop)
      return [
        "165,0 234,0 490,180 -95,180",
        "163,0 237,0 410,180 0,180",
        "168,0 231,0 460,180 -65,180",
        "170,0 232,0 380,180 0,180",
        "172,0 228,0 430,180 -30,180",
      ];
    if (isTablet)
      return [
        "165,0 234,0 555,180 -155,180", //yellow
        "163,0 237,0 410,180 0,180", //transparent
        "168,0 231,0 515,180 -115,180", //orange
        "170,0 232,0 380,180 0,180", //transparent
        "172,0 228,0 475,180 -75,180", //blue
      ];
      // return [
      //   "165,0 234,0 490,180 -95,180",
      //   "163,0 237,0 410,180 0,180",
      //   "168,0 231,0 460,180 -65,180",
      //   "170,0 232,0 380,180 0,180",
      //   "172,0 228,0 430,180 -30,180",
      // ];
      return []
  };

  return (
    <main
      className="flex flex-col items-center h-screen bg-gray-100 overflow-x-hidden"
      style={{
        backgroundImage: `url(${spacebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center h-screen max-w-xl   mt-2 ">
        <div className="flex items-center justify-center w-full px-2">
          {/* Header */}
          <img className="md:h-[5vh] xl:h-[4vh] w-[85vw]" src={MOTHERSHIP} />
        </div>

        {/* Tablet and desktop navg */}

        <section className="flex gap-8 text-lg uppercase">
          {TAB_ITEMS.map((item, idx) => (
            <button
              className={`text-white [filter:drop-shadow(0_0_4px_#fff)_drop-shadow(0_0_12px_#fff)_drop-shadow(0_0_30px_#fff)] mt-2 2xl:text-2xl cursor-pointer ${activeTab === item ? "underline" : ""}`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
              key={idx}
              onClick={() => handleNav(item)}
            >
              {item}
            </button>
          ))}
        </section>

{/* UFO PROJECTION */}
        <img
          className=" max-mobile:w-[55vw] mobile:w-[45vw] pb md:h-[7vh]  2xl:h-[5vh] mt-[1rem] z-10"
          src={ufogold}
        />
        {/* INSIDE */}
        <section className=" relative flex flex-col items-center justify-center -mt-2">
          <svg
            className="md:w-xl mobile:h-[20vh] md:h-[20vh] 2xl:h-[25vh]"
            viewBox="0 0 400 180"
            style={{ display: "block" }}
          >
            {getPoints().map((pts, i) => (
              <polygon key={i} points={pts} fill={fills[i]} />
            ))}
          </svg>
          <img
            className="absolute mobile:h-[17.5vh] w-md md:h-[20vh] 2xl:h-[25vh] mobile:ml-[1rem] max-mobile:ml-[1.5rem] sm:ml-[1.5rem] top-[0.75rem]"
            src={www}
          />
        </section>

        {/*CONTENT */}
        <main className="relative bg-[#2cb0d8]  max-w-xl  h-full 2xl:h-[75vh] flex flex-col overflow-hidden z-30 -mt-1">
          {/* Mission statement overlaps heroes */}
          <div className={`relative z-20 bg-pink-300/80 p-3 2xl:p-2 mt-[1rem] w-full md:h-[25vh] 2xl:h-[32.5vh] ${activeTab === "donate" && "flex items-center"}`}>
            {activeTab === "mission" && <Mission />}
            {activeTab === "contact" && <Contact />}
            {activeTab === "donate" && <Donate />}
          </div>

          {/*HEROES */}
          <section className={` w-xl flex  items-end justify-center  ${!isShortTablet && "flex-1"}  2xl:mt-0 `}>
            <img
              className="relative w-[45vw] md:w-[25vw] 2xl:w-[10vw] h-[32vh] 2xl:h-[30vh] z-0 -mr-[2rem] md:-mr-[3rem]"
              src={clinton}
              alt="clinton"
            />
            <img
              className="relative w-1/2  -mt-[1rem] md:h-[35vh] 2xl:h-[26h] z-10"
              src={butler}
              alt="butler"
            />
            <img
              className="relative w-[45vw] md:w-[25vw] 2xl:w-[10vw] h-[30vh] 2xl:h-[29vh] z-0 -ml-[5rem] md:-ml-[7rem] top-4"
              src={einstein}
              alt="einstein"
            />
          </section>
        </main>
      </div>
    </main>
  );
};

export default LandingBig;
