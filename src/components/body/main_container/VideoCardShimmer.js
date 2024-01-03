import React from "react";

const VideoCardShimmer = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-700 text-white overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div className="w-[350px] h-[200px] rounded-lg bg-gray-500"></div>

      <div className="flex items-start gap-1 p-2">
        <div className="rounded-full w-[50px] h-[50px] mt-2 bg-gray-400"></div>
        <div className="mt-2">
          <div className="w-[150px] h-[10px] bg-gray-400 m-1 p-1"></div>
          <div className="w-[100px] h-[10px] bg-gray-400 m-1 p-1"></div>
          <div className="w-[70px] h-[10px] bg-gray-400 m-1 p-1"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoCardShimmer;
