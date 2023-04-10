import Link from "next/link";
import { MdNotificationsNone } from "react-icons/md";
import { DiMagento } from "react-icons/di";
import { BsSearch } from "react-icons/bs";

const Welcome = () => {
  return (
    <div className="flex justify-between sm:mx-14 h-14 items-center max-sm:ml-6 my-4">
      <div className="text-4xl font-semibold  max-sm:text-2xl flex flex-row justify-center items-center gap-4">
        <DiMagento className="h-8 w-8" />
        Welcome back,
        <span className="tracking-wider text-[#ff5901]">Vadivu!</span>
      </div>
      <div>
        <div className="flex items-center justify-between flex-row rounded-lg border-2 px-4 py-2">
          <div className="">
            <select className="text-base text-gray-800 outline-none  ">
              <option>All</option>
              <option>Expert Name</option>
              <option>Organization</option>
              <option>Designation</option>
              <option>Expertise</option>
              <option>Honour Awards</option>
              <option>Web of Science</option>
            </select>
          </div>
          <div className="flex justify-center items-center flex-row ">
            <input
              className="text-base text-gray-400 flex-grow outline-none px-4 border-l-2 ml-4 w-96"
              type="search"
              placeholder="Search for.. "
            />

            <button className="outline-none">
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
      <Link href="">
        <MdNotificationsNone className="h-8 w-8" />
      </Link>
    </div>
  );
};
export default Welcome;
