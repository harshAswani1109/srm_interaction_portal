import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <nav className="bg-gradient-to-r from-[#11282e] to-[#000000] flex flex-col justify-center items-center text-white ">
      <div className="font-Sniglet not-italic font-normal text-5xl my-8 tracking-widest">
        S R M I S T
      </div>

      <div className="flex justify-center items-center gap-16 font-Montserrat mb-8 font-normal not-italic text-2xl tracking-wider">
        <span>Powered by R I N S</span>
        <a href="https://irins.inflibnet.ac.in/irins/">
          <button
            className=" font-Montserrat font-semibold not-italic text-xl tracking-wider text-black  py-2 px-4 rounded-full"
            id="background"
          >
            Read More
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Footer;
