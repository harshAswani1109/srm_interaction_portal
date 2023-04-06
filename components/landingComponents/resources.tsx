import { TbNotes } from "react-icons/tb";

const ScholarResources = () => {
  return (
    <div>
      <div className="h-96 w-96 border-4 border-blue-400 flex justify-center items-center flex-col rounded-t-xl rounded-b-lg">
        <div className="text-white h-1/3 w-full rounded-t-lg bg-[#b79afe] flex justify-between items-center p-4">
          <TbNotes className="h-16 w-16" />
          <div className="flex flex-col items-center justify-around h-full mr-4">
            <span className="text-3xl">Publications</span>
            <span className="text-4xl">16663</span>
          </div>
        </div>
        <div className="h-2/3 w-full"></div>
      </div>
    </div>
  );
};
export default ScholarResources;
