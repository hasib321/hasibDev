import Aos from "aos";
import "aos/dist/aos.css";
import "./about.scss";
import cv from "../../../public/RESUME.pdf";
import { IoMdDownload } from "react-icons/io";
import { useEffect } from "react";
const About = () => {
  const downloadCV = () => {
    window.open(cv, "_blank");
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-8 ">
      <div
        className="my-14 text-center"
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <h4>Get To Know</h4>
        <h2 className="text-6xl font-bold">
          About <span className="text-[#663399]">Me</span>
        </h2>
      </div>

      {/* personal info */}
      <div className="flex flex-col md:flex-col lg:flex-row gap-32 items-center mt-28">
        <div
          className="w-[17rem]  bg-gradient-to-r from-cyan-500 to-blue-500 bg-transparent rounded-lg "
          data-aos="slide-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img
            className="h-full w-full rounded-lg overflow-hidden rotate-12 hover:rotate-0 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1"
            src="/hasib5.1.jpg"
            alt=""
          />
        </div>

        <div className="flex-1 px-10">
          <h1
            className="text-xl"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            Howdy! I'm <span className="text-[#663399]">Hasibuzzaman</span> , a
            passionate <span className="text-[#663399]">MERN</span> Stack
            Developer with a love for crafting dynamic and immersive web
            applications. My journey into the realm of web development commenced
            six months ago, and since then, I've been delving into the
            intricacies of MERN projects, soaking up every aspect of this
            enriching experience.
          </h1>
          <ul
            className="mt-8"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <li>
              Name:<span className="text-lg"> Hasibuzzaman</span>
            </li>
            <li>
              Age:<span className="text-lg"> 23</span>
            </li>
            <li>
              Location:<span className="text-lg"> Jashore,Bangladesh</span>
            </li>
            <li>
              Phone:<span className="text-lg"> +8801724413977</span>
            </li>
            <li>
              email:<span className="text-lg"> hasibujjaman123@gmail.com</span>
            </li>
            <li>
              Language:<span className="text-lg"> Bangla,English,Hindi</span>
            </li>

            <button
              className="btn bg-white text-black hover:text-gray-300  cursor-pointer mt-5"
              onClick={downloadCV}
            >
              <IoMdDownload></IoMdDownload> Download CV
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
