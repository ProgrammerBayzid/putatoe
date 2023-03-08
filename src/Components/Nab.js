import React from "react";
import { BiMicrophone } from "react-icons/bi";

const Nab = () => {
  return (
    <div className="bg-cyan-600	 pb-5 pt-2 shadow-sm sticky top-0 z-40">
      <div className="navbar flex justify-around mt-5 ">
        <input
          type="text"
          placeholder="Search Product"
          className="input input-bordered  w-full max-w-7xl"
        />

        <div className="text-4xl text-white">
          <BiMicrophone></BiMicrophone>
        </div>
      </div>
    </div>
  );
};

export default Nab;
