import React from "react";
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className="flex flex-row justify-around items-center">
      <div className="text-4xl font-semibold tracking-wider">Faculties</div>
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
    </div>
  );
};
export default SearchBar;
