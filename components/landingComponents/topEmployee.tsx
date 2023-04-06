import { GiPodiumWinner } from "react-icons/gi";
import { ImQuotesLeft } from "react-icons/im";
import Image from "next/image";
import crossRef from "../../public/crossref_new.png";

const Employees = () => {
  return (
    <div className="h-72 w-[1240px] border-4 border-blue-400 flex justify-center items-center flex-col rounded-t-xl rounded-b-lg">
      <div className="flex flex-col bg-[#b79afe] text-white w-full rounded-t-lg h-full ">
        <div className="h-1/2 flex justify-between items-center p-2 px-8">
          <GiPodiumWinner className="h-12 w-12" />
          <span className="text-3xl">Top 10 Profiles</span>
        </div>
        <hr />
        <div className="h-1/2 flex text-2xl font-semibold justify-around items-center flex-row">
          <ul>Name</ul>
          <ul>Employee Id</ul>
          <ul className="flex justify-center items-center gap-4">
            <span>Citations</span>
            <div className="flex justify-center items-center">
              <Image src={crossRef} alt="" />/
              <ImQuotesLeft className="ml-1" />
            </div>
          </ul>
          <ul>Publications</ul>
          <ul>Projects</ul>
        </div>
      </div>
      <div className="h-7/12 w-full flex text-2xl font-semibold flex-col my-4 gap-2">
        <div className="flex  justify-around items-center flex-row">
          <ul>Name</ul>
          <ul>Employee Id</ul>
          <ul className="flex justify-center items-center gap-4">
            <span>Citations</span>
            <div className="flex justify-center items-center">
              <Image src={crossRef} alt="" />/
              <ImQuotesLeft className="ml-1" />
            </div>
          </ul>
          <ul>Publications</ul>
          <ul>Projects</ul>
        </div>
        <div className="flex  justify-around items-center flex-row">
          <ul>Name</ul>
          <ul>Employee Id</ul>
          <ul className="flex justify-center items-center gap-4">
            <span>Citations</span>
            <div className="flex justify-center items-center">
              <Image src={crossRef} alt="" />/
              <ImQuotesLeft className="ml-1" />
            </div>
          </ul>
          <ul>Publications</ul>
          <ul>Projects</ul>
        </div>
        <div className="flex  justify-around items-center flex-row">
          <ul>Name</ul>
          <ul>Employee Id</ul>
          <ul className="flex justify-center items-center gap-4">
            <span>Citations</span>
            <div className="flex justify-center items-center">
              <Image src={crossRef} alt="" />/
              <ImQuotesLeft className="ml-1" />
            </div>
          </ul>
          <ul>Publications</ul>
          <ul>Projects</ul>
        </div>
      </div>
    </div>
  );
};
export default Employees;
