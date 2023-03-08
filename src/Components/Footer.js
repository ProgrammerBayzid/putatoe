import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { BsListCheck, BsFillChatHeartFill } from "react-icons/bs";
import { FaMobileAlt, FaBlogger } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="shadow-sm sticky bottom-0 z-40">
      <div className="navbar bg-base-100 justify-around mt-5	">
        <div>
          <div className="text-4xl ">
            <AiFillHome></AiFillHome>
            <p className="text-sm mt-2 mr-4">Home</p>
          </div>
        </div>
        <div>
          <div className="text-4xl ">
            <CgProfile></CgProfile>
            <p className="text-sm mt-2 mr-4">Profile</p>
          </div>
        </div>
        <div>
          <img className="w-20 h-20" src="https://putatoe.com/img/logo.png" />
        </div>
        <div>
          <div className="text-4xl ">
            <BsListCheck></BsListCheck>
            <p className="text-sm mt-2 mr-4">Follow List</p>
          </div>
        </div>
        <div>
          <div className="text-4xl ">
            <BsFillChatHeartFill></BsFillChatHeartFill>
            <p className="text-sm mt-2 mr-4">Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
