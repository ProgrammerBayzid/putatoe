import React from "react";
import { FaMobileAlt, FaBlogger } from "react-icons/fa";
import {
  MdOutlineWidthFull,
  MdOutlineFeed,
  MdOutlineWaterDrop,
} from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiMicrophone } from "react-icons/gi";
import { BsNewspaper, BsFire, BsPersonFill } from "react-icons/bs";

const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-y-10">
      <div>
        <div className="text-4xl ml-40">
          <FaMobileAlt></FaMobileAlt>
        </div>
        <p className="text-sm mt-2 mr-4">
          Prepaid <br /> Mobile <br /> Recharge <br />
        </p>
      </div>
      <div>
        <div className="text-4xl ml-40">
          <MdOutlineWidthFull></MdOutlineWidthFull>
        </div>
        <p className="text-sm mt-2 mr-4">
          DTH Recharge <br />
        </p>
      </div>
      <div>
        <div className="text-4xl ml-40">
          <AiFillDollarCircle></AiFillDollarCircle>
        </div>
        <p className="text-sm mt-2 mr-4"> Loans</p>
      </div>
      <div>
        <div className="text-4xl ml-40">
          <GiMicrophone></GiMicrophone>
        </div>
        <p className="text-sm mt-2 mr-4">Promotion</p>
      </div>
      <div>
        <div className="text-4xl ml-40">
          <BsNewspaper></BsNewspaper>
        </div>
        <p className="text-sm mt-2 mr-4">News</p>
      </div>
      <div>
        <div className="text-4xl ml-40">
          <FaBlogger></FaBlogger>
        </div>
        <p className="text-sm mt-2 mr-4">Blogs</p>
      </div>
      <div>
        <div className="text-4xl ml-40">
          <BsPersonFill></BsPersonFill>
        </div>
        <p className="text-sm mt-2 mr-4">Jobs</p>
      </div>
      <div>
        <div className="text-4xl ml-40">
          <MdOutlineFeed></MdOutlineFeed>
        </div>
        <p className="text-sm mt-2 mr-4">
          Anonymous
          <br />
          Feedback
        </p>
      </div>
      <div>
        <div className="text-4xl ml-40">
          <BsFire></BsFire>
        </div>
        <p className="text-sm mt-2 mr-4">Gas Booking</p>
      </div>
      <div>
        <div className="text-4xl ml-40">
          <FaMobileAlt></FaMobileAlt>
        </div>
        <p className="text-sm mt-2 mr-4">Electricity Bill</p>
      </div>
      <div>
        <div className="text-4xl ml-40">
          <MdOutlineWaterDrop></MdOutlineWaterDrop>
        </div>
        <p className="text-sm mt-2 mr-4">Water Bill</p>
      </div>
      <div>
        <div className="text-4xl ml-40">
          <img
            className="w-10 h-10"
            src="https://icons.veryicon.com/png/o/miscellaneous/new-version-of-star-selected-icon/view-more.png"
          />
        </div>
        <p className="text-sm mt-2 mr-4">See More</p>
      </div>
    </div>
  );
};

export default Services;
