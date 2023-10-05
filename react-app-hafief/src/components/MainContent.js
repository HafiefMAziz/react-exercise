import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "../pages/Home"
import Profile from "../pages/Profile"


function MainContent() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default MainContent;
