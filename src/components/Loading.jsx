import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <BiLoaderCircle className="text-[26px] text-white animate-spin" />
    </div>
  );
};

export default Loading;
