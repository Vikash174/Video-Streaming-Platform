import React from "react";
import VideoCardContainer from "./VideoCardContainer";
import NavList from "./NavList";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const showSidebar = useSelector((state) => state.appControls.showSidebar);

  return (
    <div className={showSidebar ? "md:ml-64 mt-[85px]" : "sm:ml-5 mt-[85px] "}>
      <NavList />
      <VideoCardContainer />
    </div>
  );
};

export default MainContainer;
