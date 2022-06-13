import React, {useState,useEffect} from 'react';
import '../Produtos.css';

function Puffs ({produtospuff}) {

    return(
        <>
            <ul className='ul'>
              <li className="lia"><img className='imagess' src={produtospuff.url} alt="Todas Puffs" /></li>
              <li className='li'>{produtospuff.text}</li>
            </ul>
        </>
    )
}

export default Puffs;