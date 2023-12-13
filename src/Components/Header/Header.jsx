import Aos from "aos";
import "aos/dist/aos.css";
import "./header.scss";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail, IoMdDownload } from "react-icons/io";
import cv from "./../../../public/dummycv.pdf";
import { useEffect } from "react";
const Header = () => {
  const [typWriter] = useTypewriter({
    words: [
      "Frontend Web Developer",
      "MERN Stack Developer",
      "Designing Interactive Websites",
      "Building Web Solutions",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  const textVariant = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: -0,
      opacity: 2,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariant = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      opacity: 2,
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
  const downloadCV = () => {
    window.open(cv, "_blank");
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="header lg:h-screen h-auto">
      <div className="max-w-screen-xl mx-auto px-8 py-5">
        {/* social Media link */}
        <div
          className="flex flex-row-reverse gap-2"
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <a href="https://www.linkedin.com/feed/" target="blank">
            <FaLinkedin className="text-xl text-white bg-sky-500 "></FaLinkedin>
          </a>
          <a href="https://twitter.com/home?lang=en" target="blank">
            <FaTwitter className="text-xl  text-sky-500"></FaTwitter>
          </a>
          <a href="#contact">
            <IoMdMail className="text-xl text-white"></IoMdMail>
          </a>
          <a href="https://github.com/hasib321" target="blank">
            <FaGithub className="text-xl text-white"></FaGithub>
          </a>
        </div>
        {/* banner */}
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center">
          <div className="space-y-5">
            <h1
              className="text-white text-4xl font-semibold"
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-out-back"
              data-aos-duration="800"
            >
              Hi There ,
            </h1>
            <h2
              className="text-white text-5xl font-semibold"
              data-aos="slide-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              I'm
              <span className="text-[#663399] text-4xl md:text-6xl font-bold">
                HASIBUZZAMAN
              </span>
            </h2>
            <h1 className="text-[1.5rem] lg:text-4xl">
              <span>{typWriter}</span>
              <Cursor />
            </h1>
            <div>
              <button className="btn btn-outline relative z-10 cursor-pointer">
                <a href="#contact"> Reach Me</a>
              </button>

              <button
                className="btn bg-white text-black hover:text-gray-300 relative z-10 cursor-pointer ml-3"
                onClick={downloadCV}
              >
                <IoMdDownload></IoMdDownload> Download CV
              </button>
            </div>
            <div className="relative">
              <a href="#about">
                <motion.img
                  variants={textVariant}
                  animate="scrollButton"
                  className="text-white w-14 relative z-10 cursor-pointer"
                  src="/scroll.png"
                  alt="scroll"
                />
              </a>
            </div>

            <motion.div
              variants={sliderVariant}
              initial="initial"
              animate="animate"
              className="slidingTextContent"
            >
              Frontend WEB DEVELOPER
            </motion.div>
          </div>
          <div>
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-out-back"
              data-aos-duration="600"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                className="imgContainer"
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="lg:h-[50rem]"
                  src="/hasib.png"
                  alt="Hasib"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
