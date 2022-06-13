import React, {useState,useEffect} from 'react';
import '../Produtos.css';

function Poltronas ({produtospoltrona}) {

    return(
        <>
            <ul className='ul'>
              <li className="lia"><img className='imagess' src={produtospoltrona.url} alt="Todas poltronas" /></li>
              <li className='li'>{produtospoltrona.text}</li>
            </ul>
        </>
    )
}

export default Poltronas;