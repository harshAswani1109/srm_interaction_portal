import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar/navbar";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import React from "react";
import FacultyForm from "../../../components/facultyResource/facultyForm";
import Link from "next/link";

const FacultyLogin = () => {
  return (
    <div className="flex justify-center items-center w-full bg-[#feece1] h-screen">
      <div className="flex flex-row h-[80vh] w-[80vw] shadow-lg shadow-[#ff5901] justify-center items-center ">
        <Link
          href="/forms/nodalLogin"
          className="flex justify-center items-center h-full w-1/2 bg-white max-[845px]:hidden"
        >
          <Image alt="" src={logo} height={200} />
        </Link>
        <div className="flex justify-center items-center flex-col w-1/2 bg-[#feece1]  ">
          <h1 className="px-10 text-5xl mb-8 text-[#ff5901]">Login</h1>
          <FacultyForm />
          <Link
            href="/"
            className="font-bold text-sm text-[#ff5901] hover:text-[#ff5901]-800 flex justify-center items-center w-full px-8 my-6"
          >
            Forgot Password?
          </Link>
          <div className="flex justify-around mt-6 gap-20 items-center">
            <button
              className="mb-3 bg-[#ff5901] rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase  text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
              type="button"
            >
              R e g i s t e r
            </button>
            <Link href="/facultyInterface">
              <button
                className="mb-3 bg-[#ff5901] rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase  text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                type="button"
              >
                L o g i n
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FacultyLogin;
