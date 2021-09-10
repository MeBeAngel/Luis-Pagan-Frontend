import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MosCard from "../components/MosCard";
import Button from "../components/Button";
import Test from "../images/test.svg";

export default function MosPage() {
  ////////// Remove videoWrapper block after video ends //////////
  useEffect(() => {
    const video = document.getElementsByClassName("mos-video");
    const videoWrapper = document.querySelector(".mos-video-wrapper");

    for (var i = 0; i < video.length; i++) {
      video[i].onended = (e) => {
        videoWrapper.style.display = "none";
      };
    }
  }, []);

  //////////////////////////////////////////////////////////////////////////////////////////
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Opens MOS card video overlay
  function openOverlay(e) {
    const videoWrapper =
      e.target.parentNode.parentNode.parentNode.parentNode.children[0];
    const videoWrapperInner = e.target.parentNode.parentNode;
    const mosVideo = videoWrapper.children[0];

    videoWrapper.style.display = "block";
    videoWrapperInner.style.visibility = "hidden";
    mosVideo.play();

    setIsVideoOpen(true);
  }

  // Closes mos card video overlay, pauses video and resets video current time back to 0
  function closeOverlay(e) {
    if (isVideoOpen === true) {
      const mosVideoWrapper =
        document.getElementsByClassName("mos-video-wrapper");
      const flipCardInner = document.getElementsByClassName("flip-card-inner");
      const mosVideo = document.getElementsByClassName("mos-video");

      for (let i = 0; i < mosVideoWrapper.length; i++) {
        mosVideoWrapper[i].style.display = "none";
      }

      for (let i = 0; i < mosVideo.length; i++) {
        mosVideo[i].pause();
        mosVideo[i].currentTime = 0;
      }

      for (let i = 0; i < flipCardInner.length; i++) {
        flipCardInner[i].style.visibility = "visible";
      }

      setIsVideoOpen(false);
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="mos-page" onClick={closeOverlay}>
      <div className="mos-page__intro">
        <h1>FIND YOUR MOS</h1>
        <p>
          Which direction does your life path plan to take you? Which career
          piques your interest? Whether you’re sure of what you want to do or
          have no idea - the Army National Guard has you covered! With a
          plethora of career paths and vital jobs the National Guard is here to
          make sure that the only direction you go, is up. While there are
          hundreds of jobs to pursue, we are showcasing this year’s top ten
          M.O.S’s to give you look into some popular jobs.
        </p>
        <Link to="/form">
          <Button
            btnClass="sm-btn black-btn white bold"
            btnText="Find Out More"
          />
        </Link>
      </div>
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
      </div>
    </div>
  );
}
