import {useState,useEffect} from 'react';
import api from '../../Services/api';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {

  const [slider, setSlider] =  useState([]);

     useEffect(() => {   
         const getSearch = async () => {
           try {
             const slider = await api.get('/slider') 
             setSlider(slider.data);
            } catch (error){
              console.log(error);
            }}
            getSearch();

     }, [])

  return (
  <div className="slider-content">
    <p className="p-title-slider">Venha Conferir nossos Produtos</p>
    <a href="https://api.whatsapp.com/send/?phone=%2B5519981562567&text&app_absent=0">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 6500 }}
      pagination={{ clickable: true }}
      grabCursor={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
    >
    {slider.map((slider) =>(
              <SwiperSlide><img className="slider-image" src={slider.url}/></SwiperSlide>
    ) )}  
    </Swiper>
    </a>
    <p className="p-title-slider">Temos Cabeceiras e Poltronas</p>
  </div>
  )
};

export default Slider;