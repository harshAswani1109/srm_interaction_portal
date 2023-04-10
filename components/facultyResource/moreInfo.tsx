import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Pg1 from "@/pages/facultyPages/Pg1";
import Pg2 from "@/pages/facultyPages/Pg2";
import Pg3 from "@/pages/facultyPages/Pg3";
import Pg4 from "@/pages/facultyPages/Pg4";
import Pg5 from "@/pages/facultyPages/Pg5";
import Pg6 from "@/pages/facultyPages/Pg6";
const MoreInfo = () => {
  return (
    <div className="border-black border-4 bg-[#eaeffe]">
      <h1 className="text-center text-[#30449e] my-4 text-2xl">
        <b>Profile</b>
      </h1>

      <Carousel className="">
        <Pg1 />
        <Pg2 />
        <Pg3 />
        <Pg4 />
        <Pg5 />
        <Pg6 />
      </Carousel>
    </div>
  );
};
export default MoreInfo;
