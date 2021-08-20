import React from "react";
import MosCard from "../components/MosCard";
import Test from "../images/test.svg";
import Test2 from "../images/test2.svg";
import Test3 from "../images/test3.svg";

export default function MosPage() {
    return (
        <div className="mos-page">
          <div className="mos-wrapper">
            <MosCard mosTitle="Combat Engineer" mosNumber="12B" mosImg={Test}/>
            <MosCard mosTitle="Signal Support Systems Specialist" mosNumber="25U" mosImg={Test2}/>
            <MosCard mosTitle="Army Military Working Dog Handler" mosNumber="31K" mosImg={Test3}/>
            <MosCard />
            <MosCard />
            <MosCard />
            <MosCard />
            <MosCard />
            <MosCard />
            <MosCard />
          </div>
      </div>
    );
}