import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../assets/images/swiper1.jpg";
import img2 from "../../assets/images/swiper2.jpg";
import img3 from "../../assets/images/swiper3.jpg";

const Swipers = () => {
  let item = [
    {
      id: 1,
      url: img1,
    },
    {
      id: 2,
      url: img2,
    },
    {
      id: 3,
      url: img3,
    },
  ];
  let swiperItem = item?.map((el) => (
    <SwiperSlide key={el.id}>
      <img src={el.url} alt="" />
      <div className="text">
        <h4>Welcome to GreenShop</h4>
        <h1>
          Let’s Make a Better <span>Planet</span>
        </h1>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button>SHOP NOW</button>
      </div>
    </SwiperSlide>
  ));
  return (
    <div className="container swiper">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {swiperItem}
      </Swiper>
    </div>
  );
};

export default Swipers;
