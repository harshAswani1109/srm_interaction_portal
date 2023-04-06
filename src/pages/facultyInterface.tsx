import Profile from "../../components/facultyResource/profile";
import Pd from "../../components/facultyResource/profileData";
import MoreInfo from "../../components/facultyResource/moreInfo";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";

const FacultyInterface = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center gap-40 border-4 mx-12 mb-16 max-xl:flex-col">
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
