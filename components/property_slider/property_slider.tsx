'use client';
import React, { useState, useRef, useEffect } from "react";
import s from './property_slider.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PropertySlide} from "@/components/property_slide";
import {IPropertyReview} from "@/app/page";


interface Props {
  className?: string,
  slides: IPropertyReview[]
}

export const PropertySlider:React.FC<Props> = ({className='', slides}) => {
  let sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (_: number, next: number) => {
      setCurrentSlide(next + 1);
    },
  };
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  return <div className={`${s.slider_wrapper}`}>
    <Slider {...settings} className={`${className} ${s.slider} property_slider`} ref={sliderRef}>
      {slides.map((slide: IPropertyReview, index: number) => (
        <PropertySlide key={index} data={slide}/>
      ))}
    </Slider>
    <div className={s.slider_count_info}>
      <button className={s.custom_arr} onClick={previous}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none">
          <path fill="#818692"
                d="M13.75 7.119V5.63H3.213l4.72-4.569L6.835 0 .25 6.375l6.585 6.375 1.098-1.063-4.72-4.568H13.75Z"/>
        </svg>
      </button>
      <strong>{currentSlide}/{slides.length}</strong>
      <button className={s.custom_arr} onClick={next}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none">
          <path fill="#818692"
                d="M.25 7.119V5.63h10.537l-4.72-4.569L7.165 0l6.585 6.375-6.585 6.375-1.098-1.063 4.72-4.568H.25Z"/>
        </svg>
      </button>
    </div>
  </div>;
}