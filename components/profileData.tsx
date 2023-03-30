import React from "react";

const Pd = () => {
  return (
    <div>
      <div className="flex justify-center content-center h-80 mb-24 mt-12 relative ">
        <div className="h-full ">
          <div className=" h-1/2 w-72 px-6 rounded-lg" id="background">
            <div className="py-3 font-bold text-lg">Prof. Vadivu G</div>
            <div className="font-semibold">
              <li>Vidwan-Id : 30690</li>
              <li className="my-1">Download CV</li>
              <li>Profile Score 6.8</li>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center h-64 w-32 mt-4">
          <div
            className="flex justify-center items-start z-20 w-10 h-10 rounded-full"
            id="background"
          ></div>
          <div
            className="flex justify-center items-start z-20 w-10 h-10 rounded-full"
            id="background"
          ></div>
        </div>
        <div className="h-full mt-16">
          <div className="h-1/2"></div>
          <div className="h-1/2 w-72 px-6 rounded-lg " id="background">
            <div className="py-3 font-bold text-lg">Things To Know</div>
            <div className="font-semibold">
              <li>Citations 146 </li>
              <li className="my-1">H-Index 7</li>
              <li>23 Articles </li>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div></div>
        <div
          className="h-3 w-[380px] mb-[450px] rotate-90 absolute"
          id="background"
        ></div>
        <div></div>
      </div>
    </div>
  );
};

export default Pd;
