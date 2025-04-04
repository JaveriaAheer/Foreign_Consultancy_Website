import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from "swiper/modules";
import 'swiper/css'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg';

const Testimonials = () => {
    const clients=[
        {img:profilePic1,
        review:"Working with Usama was a game-changer for our business! Their expertise in web development elevated our online presence, and their professionalism and attention to detail made the entire process smooth and enjoyable."
    },{img:profilePic2,
        review:"I couldn't be happier with the website Usama created for us. They not only met but exceeded our expectations, delivering a visually stunning and highly functional website that has helped us attract new customers and grow our business"}
    ,{img:profilePic3,
        review:"Highly recommend Usama for anyone in need of top-notch web development services. Their ability to understand our requirements and translate them into a beautifully designed website was truly impressive. Plus, their responsiveness and dedication to client satisfaction were unparalleled"}
    ,
    {img:profilePic4,
        review:"Choosing Usama was one of the best decisions we made for our project. Their technical expertise, coupled with their creative flair, resulted in a website that not only looks amazing but also performs exceptionally well. They were a pleasure to work with, and we look forward to collaborating with them again in the future"}
    
            
    ]
  return (
    <div className="t-wrapper" id='Testimonial'>
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className=" blur t-blur1" ></div>
            <div className=" blur t-blur2" ></div>
        </div>
        
        {/* slider */}
        <Swiper
        spaceBetween={5}
        slidesPerView={1}
        grabCursor={true}
        className='portfolio-slider'
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}  

export default Testimonials
