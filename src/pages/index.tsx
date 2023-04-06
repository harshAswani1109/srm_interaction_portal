import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";
import FacultyComponent from "../../components/landingComponents/faculty";
import ScholarResources from "../../components/landingComponents/resources";
import Impact from "../../components/landingComponents/impact";
export default function Home() {
  return (
    <>
      <Head>
        <title>SRM INTERACTION PORTAL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar />
        <div className="flex justify-center items-center flex-col my-10">
          <div className="flex justify-center items-center flex-row gap-10 max-xl:flex-col">
            <FacultyComponent />
            <ScholarResources />
            <Impact />
          </div>
          <div className="flex justify-evenly items-center flex-row"></div>
        </div>
        <Footer />
      </main>
    </>
  );
}
