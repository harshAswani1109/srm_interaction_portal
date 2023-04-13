import MoreInfo from "../../../components/facultyResource/moreInfo";
import Slider from "../../../components/facultyResource/slidebar";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar/navbar";

const FacultyEdit = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full h-full">
        <div className="w-3/12 bg-[#5479fe]">
          <Slider />
        </div>
        <div className="w-9/12">
          <MoreInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FacultyEdit;
