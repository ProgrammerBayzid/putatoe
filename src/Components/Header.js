import React from "react";
import { ImLocation } from "react-icons/im";
import { MdNotificationsNone } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-cyan-600">
      <div className="navbar flex justify-between">
        <div className="flex  ">
          <div className="text-4xl text-white">
            <ImLocation></ImLocation>
          </div>

          <div className=""></div>
        </div>
        <input
          type="text"
          placeholder="Type Location"
          className="input   w-full max-w-7xl"
        />
        <div className="flex-none gap-5">
          <div className="text-4xl text-white">
            <MdNotificationsNone></MdNotificationsNone>
          </div>
          <div className="text-4xl text-white">
            <BsCart4></BsCart4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
