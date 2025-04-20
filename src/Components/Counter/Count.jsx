import React from "react";
import CountUp from "react-countup";
import { FaPlus } from "react-icons/fa6";

const Count = ({ count }) => {
  const { start, end, image, subtitle } = count;
  return (
    <div className="border-gray-200 bg-gray-100 border rounded-2xl px-10 py-5">
      <img className="w-20 flex flex-1" src={image} alt="" />
      <div className="flex items-center py-3">
        <CountUp className="text-5xl font-bold" start={start} end={`${end} `}>
          +
        </CountUp>
        <FaPlus />
      </div>
      <h4 className="inline-block align-bottom">{subtitle}</h4>
    </div>
  );
};

export default Count;
