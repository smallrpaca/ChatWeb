import React from "react";
import "./css/OpenRoom.scss";
import NavBar from "../components/NavBar";
import OpenRoomItem from "../components/OpenRoomItem";
import TopBar from "../components/TopBar";

// 오픈 룸 페이지
const OpenRoom = () => {
  return (
    <div className="OpenRoom">
      <TopBar />
      <OpenRoomItem />
      <NavBar />
    </div>
  );
};

export default OpenRoom;
