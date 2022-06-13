import React from 'react';
import './ImgSec.css';
import ImgA from '../../../assets/images/imageSecA.png';
import ImgB from '../../../assets/images/imageSecB.png';

function ImagensSecundarias() {
    return(
        <>
        <div className="images-sec-content">
            <div className="images-sec-local">
                <li className="image-distance"><img className="image-sec" src={ImgA} alt=""/></li>
                <li id="image-distance"><img className="image-sec" src={ImgB} alt=""/></li>
            </div>
        </div>
        </>       
    )
}

export default ImagensSecundarias;