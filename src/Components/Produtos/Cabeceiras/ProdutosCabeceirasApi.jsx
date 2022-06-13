import React, {useState,useEffect} from 'react';
import api from '../../Services/api';
import Cabeceira from './ProdutosCabeceiras';

function ProdutosCabeceiras () {


    const [produtoscabeceira, setProdutosCabeceira] =  useState([]);
  
       useEffect(() => {   
           const getSearch = async () => {
             try {
               const produtoscabeceira = await api.get('/produtos-cabeceira') 
               setProdutosCabeceira(produtoscabeceira.data);
              } catch (error){
                console.log(error);
              }}
              getSearch();
  
       }, [])

    return(
        <>
          <div>
            <h1 class="titulo-product">Produtos</h1>
          </div>
          <div>
            <h1 class="titulo-products">Cabeceiras</h1>
          </div>
        <section className="sec">
          
            {produtoscabeceira.map((produtoscabeceira) =>(
                <Cabeceira produtoscabeceira={produtoscabeceira} key={produtoscabeceira.id}/>
            ) )}
        </section>
        </>
    )
}

export default ProdutosCabeceiras