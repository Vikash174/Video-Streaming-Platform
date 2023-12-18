import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import logo from "../../assests/images/youtube_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setShowSidebar } from "../../redux/slices/appControlsSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.appControls.showSidebar);

  const sidebarClickHandler = () => {
    dispatch(setShowSidebar(!showSidebar));
  };

  return (
    <div className="flex bg-black text-white justify-between items-center fixed w-full">
      <div className="flex items-center">
        <div className="m-2 pl-4 hidden md:block">
          <button onClick={sidebarClickHandler}>
            <FontAwesomeIcon icon={icon({ name: "bars" })} />
          </button>
        </div>

        <div>
          <img
            className="w-40 object-cover bg-center"
            src={logo}
            alt="youtube logo"
          />
        </div>
      </div>
      <div className="flex">
        <input
          className="p-2 rounded-l-full bg-black border border-[#ffffff33] hidden md:block md:w-44"
          type="text"
          placeholder="Search"
        />
        <button className="bg-[#ffffff33] px-2 py-1 md:py-2 md:px-4  md:rounded-r-full border border-[#ffffff33]">
          <FontAwesomeIcon icon={icon({ name: "magnifying-glass" })} />
        </button>
        <button className="bg-[#ffffff33] py-2 px-3 mx-2  rounded-[50%]">
          <FontAwesomeIcon icon={icon({ name: "microphone" })} />
        </button>
      </div>
      <div className="hidden md:block">
        <button className="mx-5">
          <FontAwesomeIcon icon={icon({ name: "video" })} />
        </button>
        <button className="mx-5">
          <FontAwesomeIcon icon={icon({ name: "bell" })} />
        </button>

        <button className="mx-5">
          <FontAwesomeIcon icon={icon({ name: "user" })} />
        </button>
      </div>
    </div>
  );
};

export default Header;
