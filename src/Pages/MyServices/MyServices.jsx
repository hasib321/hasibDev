import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const MyServices = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto  px-8">
      <div
        className="mt-12 pb-12 text-center"
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <h4>Get To Know</h4>
        <h2 className="text-6xl font-bold">
          My <span className="text-[#663399]">Services</span>
        </h2>
      </div>
      {/* services */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* card 1 */}

        <div
          className="card border  h-96 py-5 shadow-xl hover:bg-[#663399] transition ease-in-out delay-150"
          data-aos="flip-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <div className="flex items-center justify-center ">
            <img className="w-36" src="/webDesign.png" alt="" />
          </div>
          <div className="card-body">
            <h2 className="card-title text-3xl font-extrabold">Web Design</h2>
            <p>
              Web design is the structure of a website that provide user
              experience and serve services .So, attractive web design must
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div
          className="card border  h-96 py-5 shadow-xl hover:bg-[#663399] transition ease-in-out delay-150"
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <div className="flex items-center justify-center ">
            <img className="w-36" src="/webDev.png" alt="" />
          </div>
          <div className="card-body">
            <h2 className="card-title text-3xl font-extrabold">
              Web Development
            </h2>
            <p>
              Clean , effective and bug free code can make your website faster,
              smooth and sufferless.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div
          className="card border  h-96 py-5 shadow-xl hover:bg-[#663399] transition ease-in-out delay-150"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <div className="flex items-center justify-center ">
            <img className="w-36" src="/responsive.png" alt="" />
          </div>
          <div className="card-body">
            <h2 className="card-title text-3xl font-extrabold">
              Responsive Design
            </h2>
            <p>
              Responsive web design is a very common need nowadays .There are
              many devices those have different screen sizes.
            </p>
          </div>
        </div>

        {/* card 4 */}
        <div
          className="card border  h-96 py-5 shadow-xl hover:bg-[#663399] transition ease-in-out delay-150"
          data-aos="flip-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <div className="flex items-center justify-center ">
            <img className="w-36" src="/clientSatis.png" alt="" />
          </div>
          <div className="card-body">
            <h2 className="card-title text-3xl font-extrabold">
              Client Satisfaction
            </h2>
            <p>
              Client is my main priority .Clients needs and provided guideline
              to build or upgrading websites is respectfully accepted.
            </p>
          </div>
        </div>

        {/* card 5 */}
        <div
          className="card border  h-96 py-5 shadow-xl hover:bg-[#663399] transition ease-in-out delay-150"
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <div className="flex items-center justify-center ">
            <img className="w-36" src="/pixelperfect.png" alt="" />
          </div>
          <div className="card-body">
            <h2 className="card-title text-3xl font-extrabold">
              Pixel Perfect Design
            </h2>
            <p>
              Provide Pixel perfect design that you provide in Figma,XD,PSD file
              formate
            </p>
          </div>
        </div>
        {/* card 6 */}
        <div
          className="card border  h-96 py-5 shadow-xl hover:bg-[#663399] transition ease-in-out delay-150"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <div className="flex items-center justify-center ">
            <img className="w-36" src="/price.png" alt="" />
          </div>
          <div className="card-body">
            <h2 className="card-title text-3xl font-extrabold">
              Efficient Price
            </h2>
            <p>
              I works for customer satisfaction and deliver best working
              experience to the customer .So price will not be go away.Price
              will be efficient
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
