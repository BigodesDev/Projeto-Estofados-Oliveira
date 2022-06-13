import React, {useState,useEffect} from 'react';
import api from '../../Services/api';
import Lugares from './2-3-Lugares';

function Sofas23Lugares () {


    const [sofaslugares, setSofasLugares] =  useState([]);
  
       useEffect(() => {   
           const getSearch = async () => {
             try {
               const sofaslugares = await api.get('/sofas-2-3-lugares') 
               setSofasLugares(sofaslugares.data);
              } catch (error){
                console.log(error);
              }}
              getSearch();
  
       }, [])

    return(
        <>
          <div>
            <h1 class="titulo-sofas">Sofá 2-3 Lugares</h1>
          </div>
        <section className="section-api-sofas">
          
            {sofaslugares.map((sofaslugares) =>(
                <Lugares sofaslugares={sofaslugares} key={sofaslugares.id}/>
            ) )}
        </section>
        </>
    )
}

export default Sofas23Lugares;