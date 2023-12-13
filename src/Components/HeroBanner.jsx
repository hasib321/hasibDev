import "./Banner.scss";

const HeroBanner = () => {
  return (
    <div className="banner ">
      <div className="max-w-screen-xl mx-auto px-10 flex items-center justify-center">
        <div className="wrapper">
          <div className="textContainer ">
            <h2 className="text-3xl">Hasibuzzaman</h2>
            <h1>Mern Stack Developer</h1>

            <div className="buttons">
              <button>See the Latest Works</button>
              <button>Contact Me</button>
            </div>
            <img className="text-white" src="/public/scroll.png" alt="scroll" />
          </div>
        </div>
        {/* <div className="slidingTextContent">MERN STACK WEB DEVELOPER</div> */}
        <div className="imgContainer h-full">
          <img className="h-[50rem]" src="/public/hasib.png" alt="Hasib" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
