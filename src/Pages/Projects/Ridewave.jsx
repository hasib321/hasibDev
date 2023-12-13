import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";
import img1 from "../../assets/ridewave/ridewave1.jpg";
import img2 from "../../assets/ridewave/ridewave2.jpg";
import img3 from "../../assets/ridewave/ridewave3.jpg";
import img4 from "../../assets/ridewave/ridewave4.jpg";
import img5 from "../../assets/ridewave/ridewave5.jpg";
import img6 from "../../assets/ridewave/ridewave6.jpg";
import img7 from "../../assets/ridewave/ridewave7.jpg";
import img8 from "../../assets/ridewave/ridewave8.jpg";
import img9 from "../../assets/ridewave/ridewave9.jpg";
import img10 from "../../assets/ridewave/ridewave10.jpg";
import img11 from "../../assets/ridewave/ridewave11.jpg";
import img12 from "../../assets/ridewave/ridewave12.jpg";
import img13 from "../../assets/ridewave/ridewave13.jpg";

const Ridewave = () => {
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
          <img src={img13} alt="" />
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
      </Swiper>
      <div className="mt-10">
        <button className="btn btn-outline ">
          <a
            className="flex gap-2 items-center"
            href="https://ridewave-c32fe.web.app/"
            target="blank"
          >
            <FaExternalLinkAlt></FaExternalLinkAlt> RideWave
          </a>
        </button>
        <p className="mt-5">
          Discover seamless travel options on our ride-sharing platform! Choose
          from a variety of services offered by trusted providers. Whether you
          need an immediate ride or want to schedule in advance, our platform
          gives you the flexibility to travel on your terms. Join our community
          as a service provider to showcase your offerings and engage with
          riders. Access detailed provider information, ensuring transparency
          and convenience at every step of your journey. Experience hassle-free
          travel arrangements with our user-friendly interface and secure
          transactions. Join us today and unlock a world of reliable and
          convenient ride-sharing options!
        </p>
      </div>
    </div>
  );
};

export default Ridewave;
