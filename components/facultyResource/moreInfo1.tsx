import Link from "next/link";
const MoreInfo = () => {
  return (
    <div className="border-black border-4 mx-12 mb-12">
      <h1 className="text-center text-[#30449e] mt-4 text-2xl">
        <b>Profile</b>
      </h1>

      <div className="flex justify-between align-items flex-col h-full gap-6 m-6 mx-4 mb-10 ">
        <div className="flex justify-between align-items h-full gap-6 mt-6 mx-4 mb-10 max-md:flex-col">
          <div className="w-4/12 h-72  border-4 ">
            <h1 className="text-center my-4  text-xl">
              <b>Thesis</b>
            </h1>
            <hr></hr>
          </div>
          <div className="w-4/12 h-72 border-black border-4 ">
            <h1 className="text-center my-4  text-xl">
              <b>Research Projects</b>
            </h1>
            <hr></hr>
          </div>
        </div>
        <div className="flex justify-between align-items h-full gap-6 mt-6 mx-4 mb-10 max-md:flex-col">
          <div className="w-4/12 h-72  border-4 ">
            <h1 className="text-center my-4  text-xl">
              <b>Patent</b>
            </h1>
            <hr></hr>
          </div>
          <div className="w-4/12 h-72  border-4 ">
            <h1 className="text-center my-4  text-xl">
              <b>Professional Bodies</b>
            </h1>
            <hr></hr>
          </div>
        </div>
        <div className="flex justify-between align-items h-full gap-6 mt-6 mx-4 mb-10 max-md:flex-col">
          <div className="w-4/12 h-72 border-black border-4 ">
            <h1 className="text-center my-4  text-xl">
              <b>Publications</b>
            </h1>
            <hr></hr>
          </div>
          <div className="w-4/12 h-72  border-4 ">
            <h1 className="text-center my-4  text-xl">
              <b>Committees</b>
            </h1>
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoreInfo;
