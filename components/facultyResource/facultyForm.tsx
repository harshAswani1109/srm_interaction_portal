const FacultyForm = () => {
  return (
    <div>
      <form className="rounded mt-2">
        <div className=" flex justify-center flex-col items-center gap-5">
          <fieldset className="border border-solid border-[#ff5901] px-2 rounded-lg md:w-[35%] ">
            <legend className="px-3 mx-4">Login </legend>
            <input
              type="email"
              name="email"
              className="w-72 pb-2 pl-2 focus:outline-none focus:ring-0 focus:border-0 bg-[#feece1]"
            />
          </fieldset>
          <fieldset className="border border-solid border-[#ff5901] px-2 rounded-lg md:w-[35%] ">
            <legend className="px-3 mx-4">Password</legend>
            <input
              type="password"
              name="password"
              className="w-72 pb-2 pl-2 focus:outline-none focus:ring-0 focus:border-0 bg-[#feece1]"
            />
          </fieldset>
        </div>
      </form>
    </div>
  );
};
export default FacultyForm;
