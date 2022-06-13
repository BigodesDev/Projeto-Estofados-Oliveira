import React, {useState,useEffect} from 'react';
import '../Produtos.css';

function Cabeceira ({produtoscabeceira}) {

    return(
        <>
            <ul className='ul'>
              <li className="lia"><img className='imagess' src={produtoscabeceira.url} alt="Todas cabeceiras" /></li>
              <li className='li'>{produtoscabeceira.text}</li>
            </ul>
        </>
    )
}

export default Cabeceira;