import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules';

import './ProjectCart.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
const cartData = {
    id:1,
    images:[
        'https://placehold.co/360x255',
        'https://placehold.co/360x255',
        'https://placehold.co/360x255',
        'https://placehold.co/360x255'
    ],
    title:"AIGO Building",
    price:2024124,
    address:"Batumi, khimshiashvili street",
}
const ProjectCart = () => {
  return (
    <div className='project-cart'>
        <Link to={`/project/${cartData.id}`}>
            <Swiper modules={[Navigation]} navigation={true}>
                {
                    cartData.images.map((el)=>(
                        <SwiperSlide><img src={el}/></SwiperSlide>
                    ))
                }
            </Swiper>
        </Link>
        <div className='textures'>
            <div className='title'><Link to={`/project/${cartData.id}`}>{cartData.title}</Link></div>
            <div className='address'>{cartData.address}</div>
        </div>
        
    </div>
  )
}

export default ProjectCart