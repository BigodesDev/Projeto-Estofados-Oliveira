import React, {useState,useEffect} from 'react';
import '../Sofas.css';

function Chaise ({sofaschaise}) {

    return(
        <>
            <ul className='conteudo-sofas'>
              <li className="sofas-imagens"><img className='imagens-sofa-tamanho' src={sofaschaise.url} alt="Todos-Sofas-Chaise" /></li>
              <li className='sofas-text'>{sofaschaise.text}</li>
            </ul>
        </>
    )
}

export default Chaise;