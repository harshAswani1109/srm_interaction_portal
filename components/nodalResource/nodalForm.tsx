const NodalForm = () => {
  return (
    <div>
      <form className="rounded mt-2">
        <div className=" flex justify-center flex-col items-center gap-5">
          <fieldset className="border border-solid border-[#ff5901] px-2 rounded-lg  ">
            <legend className="px-5 mx-4">Email</legend>
            <input
              type="text"
              name="email"
              className="w-72 pb-2 pl-2 focus:outline-none focus:ring-0 focus:border-0 "
            />
          </fieldset>
          <fieldset className="border border-solid border-[#ff5901] px-2 rounded-lg md:w-[35%] ">
            <legend className="px-3 mx-4">Password</legend>
            <input
              type="text"
              name="password"
              className="w-72 pb-2 pl-2 focus:outline-none focus:ring-0 focus:border-0 "
            />
          </fieldset>
        </div>
      </form>
    </div>
  );
};
export default NodalForm;
