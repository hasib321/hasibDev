import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";

import img1 from "../../assets/techbrandhub/techbrandhub1.jpg";
import img2 from "../../assets/techbrandhub/techbrandhub2.jpg";
import img3 from "../../assets/techbrandhub/techbrandhub3.jpg";
import img4 from "../../assets/techbrandhub/techbrandhub4.jpg";
import img5 from "../../assets/techbrandhub/techbrandhub5.jpg";
import img6 from "../../assets/techbrandhub/techbrandhub6.jpg";
import img7 from "../../assets/techbrandhub/techbrandhub8.jpg";
import img8 from "../../assets/techbrandhub/techbrandhub9.jpg";

const TechBrandHub = () => {
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
      </Swiper>
      <div className="mt-10">
        <button className="btn btn-outline ">
          <a
            className="flex gap-2 items-center"
            href="https://techbrandhub-271e2.web.app/"
            target="blank"
          >
            <FaExternalLinkAlt></FaExternalLinkAlt> TechBrandHub
          </a>
        </button>
        <p className="mt-5">
          Welcome to our TechBrandHub, where shopping meets convenience! Browse
          our extensive range of products hassle-free - no login/register
          required for a sneak peek. However, for the nitty-gritty details of
          specific products, a login/register step is essential, ensuring a
          secure and personalized experience. Adding items to your cart? Just a
          click away! To proceed, a quick login is necessary, ensuring a
          seamless shopping journey tailored just for you. Manage your shopping
          experience effortlessly - add products via our dedicated "Add
          Products" page or swiftly update items with the intuitive "Update
          Product" button. Both actions, though, require a logged-in status,
          prioritizing your security and ease of use. Join us today to explore a
          world of products and streamline your shopping experience!
        </p>
      </div>
    </div>
  );
};

export default TechBrandHub;
