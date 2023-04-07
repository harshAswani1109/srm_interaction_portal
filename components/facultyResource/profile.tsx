import Link from "next/link";
import Image from "next/image";
import img1 from "../../../srm-interaction-portal/public/assets/img1.jpg";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Link href="/">
        <div
          className="flex items-center justify-center w-64 h-64 duration-500 rounded-lg hover:items-start hover:pt-10 hover:h-96 hover:w-72 max-xl:mt-10"
          id="bg"
        >
          <div className="relative inline-block transition duration-500 ease-in-out group delay-10 hover:-translate-y-3 hover:scale-110">
            <div className="h-60 w-60">
              <Image src={img1} className="w-full h-full" alt="" />
            </div>

            <div className="absolute hidden mt-2 font-semibold text-white text-m group-hover:block mx-2">
              <span className="">Prof Vadivu G</span>
              <h1 className="text-xs mt-2">
                Computer Science Artificial Intelligence
              </h1>
            </div>
          </div>
        </div>
      </Link>
      <div>
        Profile URL :
        <a
          href="https://srmist.irins.org/profile/306090"
          className="mx-2 text-blue-600"
        >
          https://srmist.irins.org/profile/306090
        </a>
      </div>
    </div>
  );
};
export default Profile;
