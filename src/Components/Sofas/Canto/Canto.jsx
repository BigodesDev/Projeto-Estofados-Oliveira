import React, {useState,useEffect} from 'react';
import '../Sofas.css';

function Canto ({sofascanto}) {

    return(
        <>
            <ul className='conteudo-sofas'>
              <li className="sofas-imagens"><img className='imagens-sofa-tamanho' src={sofascanto.url} alt="Todos-Sofas-de-canto" /></li>
              <li className='sofas-text'>{sofascanto.text}</li>
            </ul>
        </>
    )
}

export default Canto;