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

const LandingSmall = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 601px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
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
  const getMobilePoints = () => {
    // if (isDesktop)
    //   return [
    //     "165,0 234,0 485,180 -80,180",
    //     "163,0 237,0 410,180 0,180",
    //     "168,0 231,0 455,180 -55,180",
    //     "170,0 232,0 380,180 0,180",
    //     "172,0 228,0 430,180 -30,180",
    //   ];
    // if (isTablet)
    //   return [
    //     "165,0 234,0 525,180 -125,180", //yellow
    //     "163,0 237,0 410,180 0,180", //transparent
    //     "168,0 231,0 500,180 -100,180", //orange
    //     "170,0 232,0 380,180 0,180", //transparent
    //     "172,0 228,0 475,180 -75,180", //blue
    //   ];

    //   if(isMobileLg) {
    //     return [
    //       "165,0 234,0 495,180 -100,180", //yellow
    //       "163,0 237,0 410,180 0,180",
    //       "168,0 231,0 465,180 -75,180", //orange
    //       "170,0 232,0 380,180 0,180",
    //       "172,0 228,0 440,180 -50,180", //blue
    //     ];
    //   }
    return [
      "165,0 234,0 560,180 -155,180",
      "163,0 237,0 410,180 0,180",
      "168,0 231,0 530,180 -130,180", //orange
      "170,0 232,0 380,180 0,180",
      "172,0 228,0 500,180 -100,180",
    ];
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
      <div className="flex flex-col items-center h-screen w-full  2xl:w-[30vw] mt-2 ">
        <div className="flex items-center w-full px-2">
   <HamburgerMenu onNavigate={handleNav} />

          {/* Header */}
          <img
            className={`h-[3vh] md:h-[5vh] ${isMobileSm || isMobileLg ? "w-[75vw] ml-[1.35rem]" : "w-[85vw]"}`}
            src={MOTHERSHIP}
          />
        </div>



        {/* <div className="absolute top-[5rem] text-left self-start">
          <img className="w-[4.5rem]" src={sunrastamp} />
        </div> */}
        <img
        className="max-mobile:w-[55vw] mobile:w-[45vw] pb md:h-[7vh]   mt-[1rem] z-10"
          src={ufogold}
        />
        <section className="w-full relative flex flex-col items-center justify-center -mt-2">
          <svg
            className="w-full h-[15vh] md:h-[20vh] 2xl:h-[27.5vh]  "
            viewBox="0 0 400 180"
            style={{ display: "block" }}
          >
            {getMobilePoints().map((pts, i) => (
              <polygon key={i} points={pts} fill={fills[i]} />
            ))}
          </svg>
          {/* <img
            className="absolute mobile:h-[17.5vh] 2xl:w-[26vw] md:h-[20vh] 2xl:h-[25vh] mobile:ml-[1rem] max-mobile:ml-[1.5rem] sm:ml-[1.5rem] top-[0.75rem]"
            src={www}
          /> */}
        </section>

        {/*CONTENT SECTION */}
        <main className="relative bg-[#2cb0d8] w-full  h-full flex flex-col  overflow-hidden z-30 -mt-1 ">

          {/* Mission statement overlaps heroes */}
          <div className="relative z-20 bg-pink-300/90 p-1 w-full min-h-[25vh] self-center mt-0 ">
            {activeTab === "mission" && <Mission />}
            {activeTab === "contact" && <Contact />}
            {activeTab === "donate" && <Donate />}
          </div>

          {/*HEROES */}
          <section className=" flex items-end justify-center w-full  mb-[0rem]">
            <img
              className="relative w-[45vw] md:w-[25vw] 2xl:w-[10vw] h-[30vh] 2xl:h-[25vh] z-0 -mr-[2rem] md:-mr-[3rem]"
              src={clinton}
              alt="clinton"
            />
            <img
              className="relative w-1/2 h-[37.5vh]  md:h-[35vh] 2xl:h-[30vh] -mt-4 z-10"
              src={butler}
              alt="butler"
            />
            <img
              className="relative w-[45vw] md:w-[25vw] 2xl:w-[10vw] h-[30vh] 2xl:h-[22.5vh] z-0 -ml-[5rem] md:-ml-[7rem] top-4"
              src={einstein}
              alt="einstein"
            />
          </section>
        </main>
      </div>
    </main>
  );
};

export default LandingSmall;
