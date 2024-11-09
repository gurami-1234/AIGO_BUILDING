import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectImg from "assets/min1-2.jpg";
import ProjectImg2 from "assets/min.jpg";
import ProjectImg3 from "assets/amani_back-min.jpg";
import ProjectImg4 from "assets/amani_corner_2-min.jpg";
import ProjectCartCSS from "./ProjectCart.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const ProjectCart = () => {
  return (
    <div className="project-cart">
      {/* ---- SLIDER ---- */}
      <div className="project-cart-slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="sold">
            <span className="procent">80%</span>
            <br />
            <span>SOLD</span>
          </div>
          <SwiperSlide>
            <img src={ProjectImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ProjectImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ProjectImg3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ProjectImg4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* ---- PROJECT CART INFO ---- */}
      <div className="project-cart-info">
        <div className="project-info">
          <span className="project-name">NEXT AMANI</span>
          <span className="project-price">from $63 000</span>
        </div>
        <div className="project-instalments">
          <span className="name-project">TASTE THE LUXURY LIVING</span>
          <span className="instalments">0% INSTALMENTS</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCart;
