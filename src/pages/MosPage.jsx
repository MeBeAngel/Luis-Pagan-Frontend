import { React, useState } from "react";
import MosCard from "../components/MosCard";
import Test from "../images/test.svg";
import Test2 from "../images/test2.svg";
import Test3 from "../images/test3.svg";

export default function MosPage() {


  //////////////////////////////////////////////////////////////////////////////////////////
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Opens MOS card video overlay
  function openOverlay() {
    const mosVideo = document.querySelector("#mos-video");
    document.querySelector(".mos-video-wrapper").style.display = "block";
    mosVideo.play();
    setIsVideoOpen(true);
  }

  // Closes mos card video overlay, pauses video and resets video current time back to 0
  function closeOverlay() {
    if (isVideoOpen === true) {
      const mosVideo = document.querySelector("#mos-video");
      document.querySelector(".mos-video-wrapper").style.display = "none";
      mosVideo.pause();
      mosVideo.currentTime = 0;
      setIsVideoOpen(false);
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="mos-page" onClick={closeOverlay}>
      <div className="mos-wrapper">
        <MosCard
          mosTitle="Combat Engineer"
          mosNumber="12B"
          mosDescription="This is a rough-and-tumble, hands-on job. You get all the
              excitement of the field, and need to problem solve on the spot —
              oftentimes in high-stress situations. 12Bs construct fighting
              positions, help the team navigate rough terrain, place and
              detonate explosives, detect mines, and a lot more."
          mosImg={Test}
          btnOnClick={openOverlay}
          videoOnClick={closeOverlay}
        />
        <MosCard
          mosTitle="Signal Support Systems Specialist"
          mosNumber="25U"
          mosDescription="MOS 25U has a long-winded name, but in the Army they just call them Commo guys (or girls). Their primary job is to make sure that radio systems, computers, local networks, generators, etc. are all working properly."
          mosImg={Test2}
        />
        <MosCard
          mosTitle="Army Military Working Dog Handler"
          mosNumber="31K"
          mosDescription="When it comes to the top 10 Army MOSs, this one was a bit of a no-brainer. Getting paid to work with dogs all day is “dream job” material for a ton of people. MWD (Military Working Dog) Handlers train their dogs to perform military operations overseas and at home, from attacking threats to sniffing out bombs. Dogs are also a powerful asset to soldiers suffering with PTSD."
          mosImg={Test3}
        />
        <MosCard mosTitle="Air Defense" />

        <MosCard mosTitle="Combat Medic" />

        <MosCard mosTitle="Army Military Working Dog Handler" />

        <MosCard mosTitle="Army Military Working Dog Handler" />

        <MosCard mosTitle="Army Military Working Dog Handler" />

        <MosCard mosTitle="Army Military Working Dog Handler" />

        <MosCard mosTitle="Army Military Working Dog Handler" />
      </div>
    </div>
  );
}
