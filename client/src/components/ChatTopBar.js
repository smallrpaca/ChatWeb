import React from "react";
import "./css/ChatTopBar.scss";
import back from "../svg/back.svg";

// MeetText 페이지 component
const ChatTopBar = () => {
  return (
    <div className="ChatTopBar">
      {/* 뒤로가기를 dom을 통해서??? */}
      <div className="roomOut" onClick={e => window.history.back()}>
        <img src={back} alt="back" width="25" />
      </div>
      <div className="name">Jacarand</div>
    </div>
  );
};

export default ChatTopBar;
