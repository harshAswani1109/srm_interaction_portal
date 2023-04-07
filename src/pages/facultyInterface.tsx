import Profile from "../../components/facultyResource/profile";
import Pd from "../../components/facultyResource/profileData";
import MoreInfo from "../../components/facultyResource/moreInfo";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";
import Welcome from "../../components/herosection/welcome";

const FacultyInterface = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <div className="flex justify-center items-center gap-40 border-4 mx-12 mb-16 max-xl:flex-col mt-4">
        <div>
          <Profile />
        </div>
        <div>
          <Pd />
        </div>
      </div>
      <MoreInfo />
      <Footer />
    </div>
  );
};
export default FacultyInterface;
