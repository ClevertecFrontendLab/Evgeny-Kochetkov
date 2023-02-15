import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Thumbs, Scrollbar } from 'swiper';

import { SSliderWrapper, SImg } from './style';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/scrollbar'
import './css.css'

import noBookImgBig from '../../assets/img/no-image-big.png';
import noBookImg from '../../assets/img/no-image.png';

export const Slider = ({images}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    function renderSlider(images) {
        const noImg =  window.innerWidth > 425 ? noBookImgBig : noBookImg;

        if(!images) {
            return (
                <SSliderWrapper>
                    <SImg src={noImg} alt='нет фото'/> 
                </SSliderWrapper>
            )
        }

        function renderSlides(images) {
            if(!images) return null
    
            return images.map((item, i) => (
                    <SwiperSlide data-test-id='slide-mini' key={`slide ${i + 1}`}>
                        <img src={`https://strapi.cleverland.by${item.url}`} alt={`slide ${i + 1}`}/>
                    </SwiperSlide>
                )   
            )
        }
    
        const slides = renderSlides(images);
        
        return (
            <SSliderWrapper>
                <Swiper
                    data-test-id='slide-big'
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    pagination={{clickable: true}}
                    modules={[Thumbs, Pagination]}
                    className='mySwiper2'
                >
                    {slides}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={5}
                    spaceBetween={30}
                    scrollbar={{draggable: true, hide: true}}
                    watchSlidesProgress={true}
                    
                    modules={[Thumbs, Scrollbar]}
                    className='mySwiper'
                >
                    {slides}
                </Swiper>
            </SSliderWrapper>
        )
    };

    const slider = renderSlider(images);

    return slider;
}