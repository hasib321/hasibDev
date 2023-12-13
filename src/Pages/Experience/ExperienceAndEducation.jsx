import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
const ExperienceAndEducation = () => {
  return (
    <div>
      <div className="mt-20 text-center">
        <h4>Get To Know</h4>
        <h2 className="text-6xl font-bold">
          EXPERIENCE & <span className="text-[#663399]">EDUCATION</span>
        </h2>
      </div>
      <div className="flex justify-around items-center">
        {/* <!-- choose us left part details--> */}
        <div className="order-2 md:order-1 lg:order-1">
          {/* <!-- choose us Content-1 --> */}
          <div className="flex gap-7 justify-center items-center flex-col md:flex-row lg:flex-row text-center md:text-start lg:text-start mb-4">
            <div className="bg-yellow-500 p-3 rounded-full">
              <FaBriefcase className=" text-white text-lg"></FaBriefcase>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">
                {" "}
                <a
                  className="flex gap-2 items-center"
                  href="https://traveltrek-a87c8.web.app/"
                  target="blank"
                >
                  <FaExternalLinkAlt></FaExternalLinkAlt> TravelTrek
                </a>
              </h2>

              <div className="w-28 h-[1px] bg-white mx-auto sm:ml-0 lg:ml-0"></div>
              <p>A awesome website for travel lover</p>
            </div>
          </div>

          {/* <!-- choose us Content-2 --> */}
          <div className="flex gap-7 justify-center items-center flex-col md:flex-row lg:flex-row text-center md:text-start lg:text-start mb-4">
            <div className="bg-yellow-500 p-3 rounded-full">
              <FaBriefcase className=" text-white text-lg"></FaBriefcase>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">
                <a
                  className="flex gap-2 items-center"
                  href="https://ridewave-c32fe.web.app/"
                  target="blank"
                >
                  <FaExternalLinkAlt></FaExternalLinkAlt> RideWave
                </a>
              </h2>

              <div className="w-28 h-[1px] bg-white mx-auto sm:ml-0 lg:ml-0"></div>
              <p>Awesome RideSharing service Website</p>
            </div>
          </div>

          {/* <!-- choose us Content-3 --> */}
          <div className="flex gap-7 justify-center items-center flex-col md:flex-row lg:flex-row text-center md:text-start lg:text-start mb-4">
            <div className="bg-yellow-500 p-3 rounded-full">
              <FaBriefcase className=" text-white text-lg"></FaBriefcase>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">
                <a
                  className="flex gap-2 items-center"
                  href="https://gaming-event-f03b3.web.app/"
                  target="blank"
                >
                  <FaExternalLinkAlt></FaExternalLinkAlt> GamingEvent
                </a>
              </h2>

              <div className="w-28 h-[1px] bg-white mx-auto sm:ml-0 lg:ml-0"></div>
              <p>Awesome Gaming event website</p>
            </div>
          </div>
        </div>

        {/* <!-- choose us right part details --> */}
        <div className="order-2 md:order-1 lg:order-1">
          {/* <!-- choose us Content-1 --> */}
          <div className="flex gap-7 justify-center items-center flex-col md:flex-row lg:flex-row text-center md:text-start lg:text-start mb-4">
            <div className="bg-yellow-500 p-3 rounded-full">
              <MdCastForEducation className=" text-white text-lg"></MdCastForEducation>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">H.S.C</h2>

              <div className="w-28 h-[1px] bg-white mx-auto sm:ml-0 lg:ml-0"></div>
              <p>I completed My H.S.C 2018</p>
            </div>
          </div>

          {/* <!-- choose us Content-2 --> */}
          <div className="flex gap-7 justify-center items-center flex-col md:flex-row lg:flex-row text-center md:text-start lg:text-start mb-4">
            <div className="bg-yellow-500 p-3 rounded-full">
              <MdCastForEducation className=" text-white text-lg"></MdCastForEducation>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">
                Undergraduate (running)
              </h2>

              <div className="w-28 h-[1px] bg-white mx-auto sm:ml-0 lg:ml-0"></div>
              <p>Currently i am studying in JUST</p>
            </div>
          </div>

          {/* <!-- choose us Content-3 --> */}
          <div className="flex gap-7 justify-center items-center flex-col md:flex-row lg:flex-row text-center md:text-start lg:text-start mb-4">
            <div className="bg-yellow-500 p-3 rounded-full">
              <MdCastForEducation className=" text-white text-lg"></MdCastForEducation>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-white">Programming Hero</h2>

              <div className="w-28 h-[1px] bg-white mx-auto sm:ml-0 lg:ml-0"></div>
              <p>Recently finished Web Development Course </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAndEducation;
