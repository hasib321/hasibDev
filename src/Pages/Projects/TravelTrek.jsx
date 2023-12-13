import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";
import img1 from "../../assets/traveltrek/traveltrek1.jpg";
import img2 from "../../assets/traveltrek/traveltrek2.jpg";
import img3 from "../../assets/traveltrek/traveltrek3.jpg";
import img4 from "../../assets/traveltrek/traveltrek4.jpg";
import img5 from "../../assets/traveltrek/traveltrek5.jpg";
import img6 from "../../assets/traveltrek/traveltrek6.jpg";
import img7 from "../../assets/traveltrek/traveltrek7.jpg";
import img8 from "../../assets/traveltrek/traveltrek8.jpg";
import img9 from "../../assets/traveltrek/traveltrek9.jpg";
import img10 from "../../assets/traveltrek/traveltrek10.jpg";
import img11 from "../../assets/traveltrek/traveltrek11.jpg";
import img12 from "../../assets/traveltrek/traveltrek12.jpg";

const TravelTrek = () => {
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
      </Swiper>
      <div className="mt-10">
        <button className="btn btn-outline ">
          <a
            className="flex gap-2 items-center"
            href="https://traveltrek-a87c8.web.app/"
            target="blank"
          >
            <FaExternalLinkAlt></FaExternalLinkAlt> TravelTrek
          </a>
        </button>
        <p className="mt-5">
          Welcome to TravelTrek, where travel transcends boundaries. Discover
          bespoke travel experiences tailored to your desires and passions. From
          curated itineraries to immersive cultural adventures, embark on
          journeys crafted by a passionate team dedicated to transforming
          wanderlust into unforgettable memories. Join us in exploring the
          world's wonders, one exceptional adventure at a time
        </p>
      </div>
    </div>
  );
};

export default TravelTrek;
