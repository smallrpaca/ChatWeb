import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/App";

const Root = () => {
  return (
    // router 등록
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default Root;
