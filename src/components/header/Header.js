import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import logo from "../../assests/images/youtube_logo.png";

const Header = () => {
  return (
    <div className="flex bg-black text-white justify-between items-center">
      <div className="flex items-center">
        <div className="m-2 pl-4">
          <button>
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
      <div className="">
        <input
          className="p-2 rounded-l-full w-[40vw] bg-black border border-[#ffffff33]"
          type="text"
          placeholder="Search"
        />
        <button className="bg-[#ffffff33] py-2 px-4 rounded-r-full border border-[#ffffff33]">
          <FontAwesomeIcon icon={icon({ name: "magnifying-glass" })} />
        </button>
        <button className="bg-[#ffffff33] py-2 px-3 mx-2  rounded-[50%]">
          <FontAwesomeIcon icon={icon({ name: "microphone" })} />
        </button>
      </div>
      <div className="">
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
