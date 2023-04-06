import { ImUserTie } from "react-icons/im";

const FacultyComponent = () => {
  return (
    <div>
      <div className="h-96 w-96 border-4 border-blue-400 flex justify-center items-center flex-col rounded-t-xl rounded-b-lg">
        <div className="text-white h-1/3 w-full rounded-t-lg bg-[#a7f6e2] flex justify-between items-center p-4">
          <ImUserTie className="h-16 w-16" />
          <div className="flex flex-col items-center justify-around h-full mr-4">
            <span className="text-3xl">Faculty</span>
            <span className="text-4xl">1740</span>
          </div>
        </div>
        <div className="h-2/3 w-full"></div>
      </div>
    </div>
  );
};
export default FacultyComponent;
