import Profile from "../../components/facultyResource/profile";
import Pd from "../../components/facultyResource/profileData";
import MoreInfo from "../../components/facultyResource/moreInfo";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";
import Welcome from "../../components/herosection/welcome";
import Image from "next/image";
import graph from "../../public/assets/gip.gif";

const FacultyInterface = () => {
  return (
    <div>
      <Welcome />
      <div className="flex justify-center items-center gap-40 border-4 mx-12 mb-8 max-xl:flex-col mt-4">
        <div>
          <Profile />
        </div>
        <div>
          <Pd />
        </div>
      </div>
      <div className="flex justify-center items-center border-4 mx-12 mb-8 max-xl:flex-col mt-4">
        <Image src={graph} alt="" className="h-[600px] w-full" />
      </div>
      <Footer />
    </div>
  );
};
export default FacultyInterface;
