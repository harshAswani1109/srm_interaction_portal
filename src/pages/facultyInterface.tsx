import Profile from '../../components/facultyResource/profile';
import Pd from '../../components/facultyResource/profileData';
import MoreInfo from '../../components/facultyResource/moreInfo';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer';
import Welcome from '../../components/herosection/welcome';
import Image from 'next/image';
import graph from '../../public/assets/gip.gif';
import Link from 'next/link';
import img1 from '../../public/assets/img1.jpg';
import { AiOutlineLogout } from 'react-icons/ai';
import GraphComponent from '../../components/facultyResource/graph';

const FacultyInterface = () => {
  return (
    <div>
      <Welcome />

      <div className="flex justify-center items-center gap-40 border-4 mx-12 mb-8 max-xl:flex-col mt-4">
        <div className="absolute flex justify-end items-start w-full h-[450px] right-[60px]">
          <ul className="flex gap-2 items-center justify-center">
            <Link
              href="/facultyPages/facultyEdit"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Edit
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 px-1"
            >
              <AiOutlineLogout className="h-8 w-8" />
              <span>Logout</span>
            </Link>
          </ul>
        </div>
        <div>
          <Profile />
        </div>
        <div>
          <Pd />
        </div>
      </div>
      <div className="flex justify-center items-center border-4 mx-12 mb-8 max-xl:flex-col mt-4">
        <GraphComponent vidwanId="306090" />
      </div>
      <Footer />
    </div>
  );
};
export default FacultyInterface;
