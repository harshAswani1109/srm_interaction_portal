import Profile from "../../components/facultyResource/profile";
import Pd from "../../components/facultyResource/profileData";
import MoreInfo from "../../components/facultyResource/moreInfo";

const FacultyInterface = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-40 border-4 mx-12 mb-16 max-xl:flex-col">
        <div>
          <Profile />
        </div>
        <div>
          <Pd />
        </div>
      </div>
      <MoreInfo />
    </div>
  );
};
export default FacultyInterface;
