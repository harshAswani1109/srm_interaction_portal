import { Component } from "react";
import { BsGraphUpArrow } from "react-icons/bs";

const Impact = () => {
  return (
    <div>
      <div className="h-96 w-96 border-4 border-blue-400 flex justify-center items-center flex-col rounded-t-xl rounded-b-lg">
        <div className="text-white h-1/3 w-full rounded-t-lg bg-[#fee4a5] flex justify-between items-center p-6">
          <BsGraphUpArrow className="h-16 w-16" />
          <span className="text-4xl">Impact</span>
        </div>
        <div className="h-2/3 w-full"></div>
      </div>
    </div>
  );
};
export default Impact;
