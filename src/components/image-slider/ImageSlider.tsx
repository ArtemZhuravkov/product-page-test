import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./ImageSlider.css"

interface IImageSliderProps {
    images: Image[]
}

interface Image {
    url: string;
    alt: string;
}

export const ImageSlider: React.FC<IImageSliderProps> = ({ images }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={1}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            centeredSlides={true}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image.url} alt={image.alt} style={{ width: '500px', borderRadius: '8px' }} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
