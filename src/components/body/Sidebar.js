import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const showSidebar = useSelector((state) => state.appControls.showSidebar);

  if (!showSidebar) {
    return null;
  }

  return (
    <div className="bg-black text-white p-2  text-sm w-44 ">
      <div>
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Shorts</span>
          </li>
          <li>
            <span>Subscription</span>
          </li>
          <li>
            <span>YouTube Music</span>
          </li>
        </ul>
      </div>
      <div>
        <span>{"You >"}</span>
        <ul>
          <li>
            <span>Your channel</span>
          </li>
          <li>
            <span>History</span>
          </li>
          <li>
            <span>Your videos</span>
          </li>
          <li>
            <span>Watch Later</span>
          </li>
          <li>
            <span>Downloads</span>
          </li>
          <li>
            <span>Show more</span>
          </li>
        </ul>
      </div>
      <div>
        <span>Subscriptions</span>
        <ul>
          <li>
            <span>Live Shyam Bhajan</span>
          </li>
          <li>
            <span>AbbyViral</span>
          </li>
          <li>
            <span>Aditya Verma</span>
          </li>
          <li>
            <span>Akshay Saini</span>
          </li>
          <li>
            <span>Ali Abdaal</span>
          </li>
          <li>
            <span>Anand Pandey</span>
          </li>
          <li>
            <span>Android Developer</span>
          </li>
          <li>
            <span>Show 88 more</span>
          </li>
        </ul>
      </div>
      <div>
        <span>Explore</span>
        <ul>
          <li>
            <span>Trending</span>
          </li>
          <li>
            <span>Shopping</span>
          </li>
          <li>
            <span>Music</span>
          </li>
          <li>
            <span>Movies</span>
          </li>
          <li>
            <span>Live</span>
          </li>
          <li>
            <span>Gaming</span>
          </li>
          <li>
            <span>News</span>
          </li>
          <li>
            <span>Sports</span>
          </li>
          <li>
            <span>Learning</span>
          </li>
          <li>
            <span>Fashion & Beauty</span>
          </li>
          <li>
            <span>Podcasts</span>
          </li>
        </ul>
      </div>
      <div>
        <span>More from YouTube</span>
        <ul>
          <li>
            <span>YouTube Studio</span>
          </li>
          <li>
            <span>YouTube Music</span>
          </li>
          <li>
            <span>YouTube Kids</span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <span>Settings</span>
          </li>
          <li>
            <span>Report history</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <span>Send feedback</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
