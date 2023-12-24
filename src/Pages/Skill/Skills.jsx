import { TbBrandJavascript } from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoCss3, IoLogoFirebase } from "react-icons/io5";
import { FaReact, FaNode } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div
        className="mt-20 text-center"
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <h4>Get To Know</h4>
        <h2 className="text-6xl font-bold">
          My <span className="text-[#663399]">Skills</span>
        </h2>
      </div>
      <div className="max-w-screen-xl mx-auto py-20 px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16">
          {/* HTML */}
          <div
            className="flex flex-col items-center"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div
              className="radial-progress  text-yellow-500 border-4 border-black"
              style={{ "--value": 85 }}
            >
              <span className="text-white">85%</span>
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl flex items-center gap-2">
                <TiHtml5 className="bg-amber-800 text-2xl"></TiHtml5>
                HTML
              </h1>
            </div>
          </div>
          {/* css */}
          <div
            className="flex flex-col items-center"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div
              className="radial-progress  text-yellow-500 border-4 border-black"
              style={{ "--value": 80 }}
            >
              <span className="text-white">80%</span>
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl flex items-center gap-2">
                <IoLogoCss3 className="bg-sky-600 text-2xl"></IoLogoCss3>
                CSS
              </h1>
            </div>
          </div>

          {/* Tailwind */}
          <div
            className="flex flex-col items-center"
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div
              className="radial-progress  text-yellow-500 border-4 border-black"
              style={{ "--value": 82 }}
            >
              <span className="text-white">82%</span>
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl flex items-center gap-2">
                <BiLogoTailwindCss className="text-sky-500 text-2xl"></BiLogoTailwindCss>
                Tailwind
              </h1>
            </div>
          </div>

          {/* Bootstrap */}
          <div
            className="flex flex-col items-center"
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div
              className="radial-progress  text-yellow-500 border-4 border-black"
              style={{ "--value": 78 }}
            >
              <span className="text-white">78%</span>
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl flex items-center gap-2">
                <FaBootstrap className="text-purple-800 text-2xl"></FaBootstrap>
                Bootstrap
              </h1>
            </div>
          </div>

          {/* JS */}
          <div
            className="flex flex-col items-center"
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div
              className="radial-progress  text-yellow-500 border-4 border-black"
              style={{ "--value": 82 }}
            >
              <span className="text-white">82%</span>
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl flex items-center gap-2">
                <TbBrandJavascript className="bg-yellow-500 text-2xl"></TbBrandJavascript>
                Javascript
              </h1>
            </div>
          </div>

          {/* React */}
          <div
            className="flex flex-col items-center"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div
              className="radial-progress  text-yellow-500 border-4 border-black"
              style={{ "--value": 70 }}
            >
              <span className="text-white">70%</span>
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl flex items-center gap-2">
                <FaReact className="text-sky-400 text-2xl"></FaReact>
                React
              </h1>
            </div>
          </div>

          {/* Firebase */}
          <div
            className="flex flex-col items-center"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div
              className="radial-progress  text-yellow-500 border-4 border-black"
              style={{ "--value": 75 }}
            >
              <span className="text-white">75%</span>
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl flex items-center gap-2">
                <IoLogoFirebase className="text-yellow-500 text-2xl"></IoLogoFirebase>
                Firebase
              </h1>
            </div>
          </div>
          {/* MongoDb */}
          <div
            className="flex flex-col items-center"
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div
              className="radial-progress  text-yellow-500 border-4 border-black"
              style={{ "--value": 65 }}
            >
              <span className="text-white">65%</span>
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl flex items-center gap-2">
                <SiMongodb className="text-green-800 text-2xl"></SiMongodb>
                MongoDb
              </h1>
            </div>
          </div>

          {/* Express */}
          <div
            className="flex flex-col items-center"
            data-aos="slide-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div
              className="radial-progress  text-yellow-500 border-4 border-black"
              style={{ "--value": 65 }}
            >
              <span className="text-white">65%</span>
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl flex items-center gap-2">
                <SiExpress className="text-gray-500 text-2xl"></SiExpress>
                Express
              </h1>
            </div>
          </div>

          {/* Node */}
          <div
            className="flex flex-col items-center"
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div
              className="radial-progress  text-yellow-500 border-4 border-black"
              style={{ "--value": 60 }}
            >
              <span className="text-white">60%</span>
            </div>
            <div className="mt-5">
              <h1 className="text-white text-xl flex items-center gap-2">
                <FaNode className="text-green-500 text-2xl"></FaNode>
                Node
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
