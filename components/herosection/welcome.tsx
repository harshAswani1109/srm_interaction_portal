import Link from "next/link";
import { MdNotificationsNone } from "react-icons/md";
import { DiMagento } from "react-icons/di";

const Welcome = () => {
  return (
    <div className="flex justify-between sm:mx-14 h-10 items-center max-sm:ml-6">
      <div className="text-4xl font-semibold  max-sm:text-2xl flex flex-row justify-center items-center gap-4">
        <DiMagento className="h-8 w-8" />
        Welcome back,
        <span className="tracking-wider text-[#ff5901]">Vadivu!</span>
      </div>
      <Link href="">
        <MdNotificationsNone className="h-8 w-8" />
      </Link>
    </div>
  );
};
export default Welcome;
