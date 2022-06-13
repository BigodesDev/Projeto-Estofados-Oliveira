import {useState,useEffect} from 'react';
import api from '../../Services/api';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import './Comentario.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Comentario = () => {

    const [slider, setSlider] =  useState([]);
  
       useEffect(() => {   
           const getSearch = async () => {
             try {
               const slider = await api.get('/comments') 
               setSlider(slider.data);
              } catch (error){
                console.log(error);
              }}
              getSearch();
  
       }, [])
  
    return (
      <>
        <ul className="ul-comment">
          <p className="p-title-comment">Comentários dos Clientes</p>
        </ul>
        <div className="slider-comments">    
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={1000}
            slidesPerView={1}
            autoplay={{ delay: 6500 }}
            grabCursor={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop={true}
          >
          {slider.map((comments) =>(
                <SwiperSlide>            
                    <ul className="comments-box">
                        <li className="user-name">{comments.name}</li>
                        <li className="user-comment">{comments.comentario}</li>
                    </ul> 
                </SwiperSlide>
          ) )}  
          </Swiper>
        </div>
      </>
    )
  };
  
  export default Comentario;