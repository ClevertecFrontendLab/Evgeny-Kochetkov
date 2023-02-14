import { useState } from 'react';
import { useSelector } from 'react-redux';

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

export const Slider = () => {

    const bookArr = useSelector(state => state.bookArr);

    const hrefId = document.location.href.split('/').pop();
    const [bookItem] = bookArr.filter(({id}) => id === hrefId);


    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    function renderSlides(book) {
        return book.imgArr.map((item, i) => (
                <SwiperSlide data-test-id='slide-mini' key={`slide ${i + 1}`}>
                    <img src={item} alt={`slide ${i + 1}`}/>
                </SwiperSlide>
            )   
        )
    }

    const slides = renderSlides(bookItem);

    function renderSlider({imgArr, name}) {

        const noImg =  window.innerWidth > 425 ? noBookImgBig : noBookImg;
        
        const noImgOrSlider = slides.length === 0 ?
            <SSliderWrapper>
                <SImg src={imgArr.length === 0 ? noImg : imgArr[0]} alt={`Книга: ${name}`}/> 
            </SSliderWrapper>
            :
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
    
        return noImgOrSlider;
    };

    const slider = renderSlider(bookItem);

    return slider;
}