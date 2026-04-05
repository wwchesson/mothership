import React from "react";
import { UFO, spacebg, MOTHERSHIP, sunrastamp, www, ufogold} from "./assets";

const Landing = () => {
  return (

    <main className="flex flex-col items-center  h-screen bg-gray-100"
    style={{backgroundImage: `url(${spacebg})`}}
    >

<div className="flex flex-col items-center h-screen w-[40vw]">
    <img 
    className=""
    src={MOTHERSHIP}
    />

    <section className="flex gap-8 text-lg uppercase font-semibold">
           {["mission", "contact", "donate"].map((item, idx) => (
        <a
        className="text-[#2cb0d8] mt-2"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        key={idx}
        href={`/${item}`}
        >
        {item}
        </a>

    ))} 
    </section>

    <div className="absolute top-[5rem] text-left self-start">
        
        <img 
        className="w-[4.5rem]"
        src={sunrastamp}
        />


    </div>
  <img 
        className="2xl:w-1/4 mt-[1rem] z-10"
        src={ufogold}
        />
    <section className=" flex flex-col items-center justify-center">
      

        <div className="p-2 w-[40vw] flex items-center justify-center bg-[#2cb0d8]"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        >
            <img 
className="w-1/2 mt-[1rem] ml-4"
src={www}
/> 
        </div>

    </section>

    <section className="bg-[#2cb0d8] w-[40vw] h-[65vh] flex  justify-center -mt-[0.01rem] rounded-t">


<div className="bg-pink-300 p-4 w-[35vw] h-[25vh] mt-[2rem]">
MISSION STATEMENT HERE
</div>
    </section>



</div>


    </main>

  );
};

export default Landing;
