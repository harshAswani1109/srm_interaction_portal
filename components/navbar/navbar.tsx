import React from "react";
import Image from "next/image";
import nav from "../../srm-interaction-portal/public/assets/navLogo.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/Rx";

const Navbar = () => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const handleFunction = () => {
    console.log("instance");
    setdropdownOpen(!dropdownOpen);
  };
  return (
    <nav className="">
      <div className="flex justify-between items-center h-28 mx-12">
        <ul className="font-Sniglet not-italic font-semibold mx-6 text-4xl tracking-widest  ">
          S R M I S T
        </ul>

        <div className="flex items-center relative group z-10">
          <div className="hidden max-lg:block">
            <div className=" w-10 h-10 flex justify-center items-center hover:cursor-pointer ">
              <RxHamburgerMenu
                className="h-full w-full"
                onClick={handleFunction}
              />
            </div>
            {dropdownOpen ? (
              <div
                className=" justify-center items-center right-[2px] w-64 h-60 gap-3 rounded-lg text-black font-semibold absolute flex flex-col"
                id="background"
              >
                <a href="/">
                  <ul
                    className="font-Montserrat  not-italic text-xl tracking-wider "
                    id="hoverText "
                  >
                    H O M E
                  </ul>
                </a>

                <a href="/nodalOfficer">
                  <button className=" font-Montserrat font-semibold not-italic text-xl tracking-wider text-black  py-2 px-4 rounded-full">
                    Login as Nodal Officer
                  </button>
                </a>
                <a href="/faculty">
                  <button className=" font-Montserrat font-semibold not-italic text-xl tracking-wider text-black  py-2 px-4 rounded-full">
                    Login as Faculty
                  </button>
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="max-lg:hidden flex justify-center items-center gap-8">
          <a href="/">
            <ul
              className="font-Montserrat font-normal not-italic text-xl tracking-wider "
              id="hoverText "
            >
              HOME
            </ul>
          </a>

          <a href="/nodalOfficer">
            <button
              className=" font-Montserrat font-semibold not-italic text-xl tracking-wider text-black  py-2 px-4 rounded-full"
              id="background"
            >
              Login as Nodal Officer
            </button>
          </a>
          <a href="/faculty">
            <button
              className=" font-Montserrat font-semibold not-italic text-xl tracking-wider text-black  py-2 px-4 rounded-full"
              id="background"
            >
              Login as Faculty
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
