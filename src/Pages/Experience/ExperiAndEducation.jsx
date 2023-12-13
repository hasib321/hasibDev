import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ExperiAndEducation = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-8 mt-20">
      <div
        className="mt-20 text-center"
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <h4>Get To Know</h4>
        <h2 className="text-6xl font-bold">
          EXPERIENCE & <span className="text-[#663399]">EDUCATION</span>
        </h2>
      </div>
      {/* experience */}
      <section
        className="mt-10"
        data-aos="zoom-in-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">EXPERIENCE</h3>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    <a
                      className="flex gap-2 items-center"
                      href="https://gaming-event-f03b3.web.app/"
                      target="blank"
                    >
                      <FaExternalLinkAlt></FaExternalLinkAlt> GamingEvent
                    </a>
                  </h3>

                  <p className="mt-3">Awesome Gaming event website</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    <a
                      className="flex gap-2 items-center"
                      href="https://traveltrek-a87c8.web.app/"
                      target="blank"
                    >
                      <FaExternalLinkAlt></FaExternalLinkAlt> TravelTrek
                    </a>
                  </h3>

                  <p className="mt-3">A awesome website for travel lover</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    <a
                      className="flex gap-2 items-center"
                      href="https://ridewave-c32fe.web.app/"
                      target="blank"
                    >
                      <FaExternalLinkAlt></FaExternalLinkAlt> RideWave
                    </a>
                  </h3>

                  <p className="mt-3">Awesome RideSharing service Website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* education */}
      <section
        data-aos="zoom-in-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">EDUCATION</h3>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    H.S.C(2016-2018)
                  </h3>

                  <p className="mt-3">
                    I completed my H.S.C in 2018 from Savar Cantonment Public
                    School and College.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    Undergraduate (2020-running)
                  </h3>

                  <p className="mt-3">
                    I am currently studying Environmental Science and Technology
                    in the Faculty of Applied Science and Technology at Jashore
                    University of Science and Technology.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    Programming Hero(2023)
                  </h3>

                  <p className="mt-3">
                    I have recently completed a Web Development Course.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiAndEducation;
