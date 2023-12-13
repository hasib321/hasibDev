import "./Banner.scss";
import { motion } from "framer-motion";
import CV from "./../../../public/dummycv.pdf";
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

const Banner = () => {
  return (
    <div className="banner ">
      <div className="max-w-screen-xl mx-auto px-10 ">
        <motion.div
          variants={textVariant}
          initial="initial"
          animate="animate"
          className="wrapper"
        >
          <motion.div variants={textVariant} className="textContainer py-44">
            <motion.h2 variants={textVariant} className="text-3xl">
              Hasibuzzaman
            </motion.h2>
            <motion.h1 variants={textVariant}>MERN Stack Developer</motion.h1>

            <div>
              <a href={CV} download className="cursor-pointer">
                Dowload CV
              </a>
            </div>
            <motion.img
              variants={textVariant}
              animate="scrollButton"
              className="text-white"
              src="/public/scroll.png"
              alt="scroll"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={sliderVariant}
          initial="initial"
          animate="animate"
          className="slidingTextContent"
        >
          MERN STACK WEB DEVELOPER
        </motion.div>
        <div className="imgContainer  h-full">
          <img className="h-[50rem]" src="/public/hasib.png" alt="Hasib" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
