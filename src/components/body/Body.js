import React from "react";
import Sidebar from "./Sidebar";
import NavList from "./NavList";
import VideoCardContainer from "./main_container/VideoCardContainer";

const Body = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <NavList />
        <VideoCardContainer />
      </div>
    </div>
  );
};

export default Body;
