import React, {useState,useEffect} from 'react';
import '../Sofas.css';

function Retratil ({sofasretratil}) {

    return(
        <>
            <ul className='conteudo-sofas'>
              <li className="sofas-imagens"><img className='imagens-sofa-tamanho' src={sofasretratil.url} alt="Todos-Sofas-Retratil" /></li>
              <li className='sofas-text'>{sofasretratil.text}</li>
            </ul>
        </>
    )
}

export default Retratil;