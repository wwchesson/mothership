import React from "react";
import { UFO, spacebg, MOTHERSHIP, sunrastamp, www, ufogold, clinton, butler, einstein } from "./assets";

const Landing = () => {
  return (
    <main
      className="flex flex-col items-center  h-screen bg-gray-100"
      style={{ backgroundImage: `url(${spacebg})` }}
    >
      <div className="flex flex-col items-center h-screen w-[30vw] mt-2">
        <img className="" src={MOTHERSHIP} />

        <section className="flex gap-8 text-lg uppercase ">
          {["tickets", "mission", "contact", "donate"].map((item, idx) => (
            <a
              className="text-white [filter:drop-shadow(0_0_4px_#fff)_drop-shadow(0_0_12px_#fff)_drop-shadow(0_0_30px_#fff)] mt-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              key={idx}
              href={`/${item}`}
            >
              {item}
            </a>
          ))}
        </section>

        {/* <div className="absolute top-[5rem] text-left self-start">
          <img className="w-[4.5rem]" src={sunrastamp} />
        </div> */}
        <img className="2xl:w-1/3 h-[5vh] mt-[1rem] z-10" src={ufogold} />
        <section className="relative flex flex-col items-center justify-center -mt-2">
          <svg
            className="w-[30vw] h-[27.5vh]"
            viewBox="0 0 400 180"
            style={{ display: "block" }}
          >
            {/* Yellow — outermost stripe #facc15 */}
            <polygon points="165,0 234,0 485,180 -80,180" fill="rgb(244, 231, 152)" />
            {/* gap — transparent */}
            <polygon points="163,0 237,0 410,180 0,180" fill="transparent" />
            {/* Orange — middle stripe */}
            <polygon points="168,0 231,0 455,180 -55,180" fill="rgb(226, 107, 67)" />
            {/* gap — transparent */}
            <polygon points="170,0 232,0 380,180 0,180" fill="transparent" />
            {/* Blue — innermost fill */}
            <polygon points="172,0 228,0 430,180 -30,180" fill="#2cb0d8" />
          </svg>
          <img
            className="absolute w-[26vw] h-[25vh] ml-[1.5rem] top-[0.75rem]"
            src={www}
          />
        </section>

        {/*CONTENT SECTION */}
        <main className="relative bg-[#2cb0d8] w-[30vw] h-[64.5vh] flex flex-col justify-between overflow-hidden ">
          {/* Mission statement overlaps heroes */}
          <div className="relative z-20 bg-pink-300/80 p-4 w-[25vw] h-[35vh] self-center mt-4">
            MISSION STATEMENT HERE
          </div>
          {/*HEROES */}
          <section className="flex items-end justify-center w-full mb-[0rem]">
            <img className="relative w-[10vw] h-[30vh] z-0 -mr-[3rem]" src={clinton} alt="clinton" />
            <img className="relative w-1/2 h-[35vh] -mt-4 z-10" src={butler} alt="butler" />
            <img className="relative w-[10vw] h-[30vh] z-0 -ml-[7rem] top-4" src={einstein} alt="einstein" />
          </section>
        </main>


      </div>
    </main>
  );
};

export default Landing;
