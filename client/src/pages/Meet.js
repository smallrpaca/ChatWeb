import React from "react";
// import MeetBar from "../components/MeetBar";
import MeetSelect from "../components/MeetSelect";
import NavBar from "../components/NavBar";
import "./css/Meet.scss";
import TopBar from "../components/TopBar";
import SnsLink from "../components/SnsLink";

// Meet 페이지
// loading 화면도 있으면 좋을꺼같다.
const Meet = () => {
  return (
    <div className="Meet">
      <div>
        <div>
          <TopBar />
        </div>
        <div className="MeetDisplay">
          <MeetSelect />
        </div>
        <SnsLink />
        <NavBar />
      </div>
    </div>
  );
};

export default Meet;
