import React, {useState,useEffect} from 'react';
import api from '../../Services/api';
import Poltronas from './ProdutosPoltronas';

function ProdutosPoltronas () {


    const [produtospoltrona, setProdutosPoltrona] =  useState([]);
  
       useEffect(() => {   
           const getSearch = async () => {
             try {
               const produtospoltrona = await api.get('/produtos-poltrona') 
               setProdutosPoltrona(produtospoltrona.data);
              } catch (error){
                console.log(error);
              }}
              getSearch();
  
       }, [])

    return(
        <>
          <div>
            <h1 class="titulo-productss">Poltronas</h1>
          </div>
        <section className="sec">
          
            {produtospoltrona.map((produtospoltrona) =>(
                <Poltronas produtospoltrona={produtospoltrona} key={produtospoltrona.id}/>
            ) )}
        </section>
        </>
    )
}

export default ProdutosPoltronas;