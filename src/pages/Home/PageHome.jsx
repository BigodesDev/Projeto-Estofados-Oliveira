import React from 'react';
import Slider from '../../Components/Home/Slider/Slider';
import ImagensSecundarias from '../../Components/Home/ImagensSecundarias/ImagensSecundarias';
import Comentario from '../../Components/Home/Comentario/Comentario';

const PagesIndex = () =>{
  
  return(
    <div>
        <Slider/>
        <ImagensSecundarias/>
        <Comentario/>
    </div>
  )
}

export default PagesIndex;