import Link from "next/link";
import React from "react";
import Image from "next/image";
import img1 from "../../public/assets/img1.jpg";
import { TbHomeEco } from "react-icons/tb";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { SiExpertsexchange } from "react-icons/si";
import { SiExpressvpn } from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";
import { CgAwards } from "react-icons/cg";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { SiRepublicofgamers } from "react-icons/si";
import { MdOutlineAppRegistration } from "react-icons/md";
import { RiSearchEyeLine } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { TbBrandSpacehey } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";
import { TbPhotoSensor2 } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen p-2 shadow w-full text-white text-xl">
      <div className="space-y-3">
        <div className="flex justify-between flex-col gap-5">
          <ul className="p pb-4 space-y-1 w-full">
            <Link
              href="/facultyInterface"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <TbHomeEco className="h-8 w-8" />
              <span>Home</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <TbPhotoSensor2 className="h-8 w-8" />
              <span>Change Profile</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <BsFillPersonLinesFill className="h-8 w-8" />
              <span>Personal Information</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <MdOutlineConnectWithoutContact className="h-8 w-8" />
              <span>Contact Information</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <SiExpertsexchange className="h-8 w-8" />
              <span>Expertise</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <SiExpressvpn className="h-8 w-8" />
              <span>Experience</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <GiGraduateCap className="h-8 w-8" />
              <span>Qualifications</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <CgAwards className="h-8 w-8" />
              <span>Honours and Awards</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <MdOutlineLibraryBooks className="h-8 w-8" />
              <span>Thesis</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <SiRepublicofgamers className="h-8 w-8" />
              <span>Publications</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <MdOutlineAppRegistration className="h-8 w-8" />
              <span>Patent</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <RiSearchEyeLine className="h-8 w-8" />
              <span>Research Projects</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <MdGroups className="h-8 w-8" />
              <span>Committees</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 gap-4 px-1"
            >
              <TbBrandSpacehey className="h-8 w-8" />
              <span>Professional Bodies</span>
            </Link>
          </ul>
          <ul className="flex gap-2">
            <Link
              href="/facultyInterface"
              className="flex items-center sm:px-3 py-1 space-x-3 px-1"
            >
              <Image src={img1} alt="" className="h-12 w-12 rounded-3xl" />
              <span>Vadivu G</span>
            </Link>
            <Link
              href="/"
              className="flex items-center sm:px-3 py-1 space-x-3 px-1"
            >
              <AiOutlineLogout className="h-8 w-8" />
              <span>Logout</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
