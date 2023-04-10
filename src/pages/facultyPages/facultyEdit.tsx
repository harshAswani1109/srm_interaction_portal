import MoreInfo from "../../../components/facultyResource/moreInfo";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar/navbar";

const FacultyEdit = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center w-full">
        <div className="h-full 2/12">Faculty Edit</div>
        <div className="w-10/12 bg-slate-500">
          <MoreInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FacultyEdit;
