import { pg1, pg2, pg3 } from "./misson.json";

const Mission = () => {
  return (
    <div
className="h-[24vh] md:h-[23vh] 2xl:h-[30vh]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
<div className="h-full">
<iframe
className="w-full h-full"
src="https://www.youtube.com/embed/odDp7b2-9bw?si=8TjI86ah1ZEj0C9W" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
  </div>

      {/* <p >{pg1}</p>
      <p className="mt-2">{pg2}</p>
      <p className="mt-2">{pg3}</p> */}
    </div>
  );
};

export default Mission;
