import React, {useState,useEffect} from 'react';
import '../Sofas.css';

function Lugares ({sofaslugares}) {

    return(
        <>
            <ul className='conteudo-sofas'>
              <li className="sofas-imagens"><img className='imagens-sofa-tamanho' src={sofaslugares.url} alt="Todos-Sofas-2-3-Lugares" /></li>
              <li className='sofas-text'>{sofaslugares.text}</li>
            </ul>
        </>
    )
}

export default Lugares;