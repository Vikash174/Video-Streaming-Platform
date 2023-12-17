import React from "react";
import Sidebar from "./Sidebar";
import NavList from "./main_container/NavList";
import VideoCardContainer from "./main_container/VideoCardContainer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import MainContainer from "./main_container/MainContainer";
import VideoPlayingPage from "../video_playing_page/VideoPlayingPage";

const Body = () => {
  return (
    <div className="flex ">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default Body;
