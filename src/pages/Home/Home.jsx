import { ProjectCart } from 'components'
import HomeProjectsLayout from 'layouts/HomeProjectsLayout/HomeProjectsLayout'
import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'

const Home = () => {

  return (
    <div>
      
      <HomeProjectsLayout title="in process">
        <Swiper slidesPerView='auto'  spaceBetween={60}>
          <SwiperSlide style={{width:"max-content"}}><ProjectCart/></SwiperSlide>
          <SwiperSlide style={{width:"max-content"}}><ProjectCart/></SwiperSlide>
          <SwiperSlide style={{width:"max-content"}}><ProjectCart/></SwiperSlide>
        </Swiper>
      </HomeProjectsLayout>

      <HomeProjectsLayout title="Projects">
        <Swiper slidesPerView='auto'  spaceBetween={60}>
          <SwiperSlide style={{width:"max-content"}}><ProjectCart/></SwiperSlide>
          <SwiperSlide style={{width:"max-content"}}><ProjectCart/></SwiperSlide>
          <SwiperSlide style={{width:"max-content"}}><ProjectCart/></SwiperSlide>
        </Swiper>
      </HomeProjectsLayout>
    </div>
  )
}

export default Home