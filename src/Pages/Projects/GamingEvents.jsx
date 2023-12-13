import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";
import img1 from "../../assets/gamingevent/gamingevent1.jpg";
import img2 from "../../assets/gamingevent/gamingevent2.jpg";
import img3 from "../../assets/gamingevent/gamingevent3.jpg";
import img4 from "../../assets/gamingevent/gamingevent4.jpg";
import img5 from "../../assets/gamingevent/gamingevent5.jpg";
import img6 from "../../assets/gamingevent/gamingevent6.jpg";
import img7 from "../../assets/gamingevent/gamingevent7.jpg";
import img8 from "../../assets/gamingevent/gamingevent8.jpg";
import img9 from "../../assets/gamingevent/gamingevent9.jpg";
import img10 from "../../assets/gamingevent/gamingevent10.jpg";
import img11 from "../../assets/gamingevent/gamingevent11.jpg";
import img12 from "../../assets/gamingevent/gamingevent12.jpg";
import img13 from "../../assets/gamingevent/gamingevent13.jpg";
import img14 from "../../assets/gamingevent/gamingevent14.jpg";
import img15 from "../../assets/gamingevent/gamingevent15.jpg";
import img16 from "../../assets/gamingevent/gamingevent16.jpg";

const GamingEvents = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img12} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img13} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img14} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img15} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img16} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="mt-10">
        <button className="btn btn-outline ">
          <a
            className="flex gap-2 items-center"
            href="https://gaming-event-f03b3.web.app/"
            target="blank"
          >
            <FaExternalLinkAlt></FaExternalLinkAlt> GamingEvent
          </a>
        </button>
        <p className="mt-5">
          Welcome to our Gaming Events Hub! Experience the thrill of gaming
          events with ease at our secure platform powered by Firebase. Mistyped
          passwords or emails prompt helpful error messages to ensure a seamless
          user experience. Participation in our gaming events is open to all! To
          explore our gaming services, logging in is a must. Dive into the
          gaming world and join our exhilarating competitions. Discover the
          brains behind these events on our "About Us" page - exclusive insights
          into our visionary founders. Access to this section requires login,
          prioritizing security and personalized experiences. Signing up is
          effortless - choose Google login or manually log in with your email
          and password. Join us for an adrenaline rush of gaming excitement
          today!
        </p>
      </div>
    </div>
  );
};

export default GamingEvents;
