import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar/navbar";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import FF from "../../../components/facultyResource/facultyForm";
import React from "react";

const FacultyLogin = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex justify-center items-center ">
          <div className="h-96 w-5/12 border border-black flex justify-center items-center mt-12 mb-24">
            <div
              className="w-5/12 h-full border border-r-2 flex justify-center items-center"
              id="background"
            >
              <Image src={logo} />
            </div>
            <div className="w-7/12 h-full border-l-2 flex justify-start items-left flex-col">
              <h1 className="px-10 text-2xl my-4">Login</h1>
              <FF />
              <a
                className="font-bold text-sm text-blue-500 hover:text-blue-800 flex justify-start items-center w-full px-8 my-6"
                href="/"
              >
                Forgot Password?
              </a>
              <div className="flex justify-center mt-6 gap-10 items-center w-">
                <button
                  className="mb-3 inline-block w-3/5 rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  id="background"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default FacultyLogin;
