import React, {useState,useEffect} from 'react';
import api from '../../Services/api';
import Puffs from './ProdutosPuffs';

function ProdutosPuffs () {


    const [produtospuff, setProdutosPuff] =  useState([]);
  
       useEffect(() => {   
           const getSearch = async () => {
             try {
               const produtospuff = await api.get('/produtos-puff') 
               setProdutosPuff(produtospuff.data);
              } catch (error){
                console.log(error);
              }}
              getSearch();
  
       }, [])

    return(
        <>
          <div>
            <h1 class="titulo-productss">Puffs</h1>
          </div>
        <section className="sec">
          
            {produtospuff.map((produtospuff) =>(
                <Puffs produtospuff={produtospuff} key={produtospuff.id}/>
            ) )}
        </section>
        </>
    )
}

export default ProdutosPuffs;