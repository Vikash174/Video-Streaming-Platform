import React from "react";

const NavList = () => {
  return (
    <div className="bg-black text-white ">
      <ul className="flex flex-row flex-nowrap gap-5 items-center ">
        <li className="rounded-md px-2 py-1  bg-gray-800 w-auto min-w-max hover:cursor-pointer hover:opacity-80">
          <span className="">All</span>
        </li>
        <li className="rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>Gaming</span>
        </li>
        <li className=" rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>Cricket</span>
        </li>
        <li className=" rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>Big Boss</span>
        </li>
        <li className=" rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>Gadgets</span>
        </li>
        <li className=" rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>Tamil Cinema</span>
        </li>
        <li className=" rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>Live</span>
        </li>

        <li className=" rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>Dramedy</span>
        </li>
        <li className=" rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>News</span>
        </li>
        <li className=" rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>Comedy</span>
        </li>
        <li className=" rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>Mobile games</span>
        </li>
        <li className=" rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>Action-adventure games</span>
        </li>
        <li className=" rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>cars</span>
        </li>
        <li className=" rounded-md px-2 py-1 bg-gray-800 min-w-max hover:cursor-pointer hover:opacity-80">
          <span>Recently Uploaded</span>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
