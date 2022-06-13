import React, {useState,useEffect} from 'react';
import api from '../../Services/api';
import Canto from './Canto';

function SofasCanto () {


    const [sofascanto, setSofasCanto] =  useState([]);
  
       useEffect(() => {   
           const getSearch = async () => {
             try {
               const sofascanto = await api.get('/sofas-de-canto') 
               setSofasCanto(sofascanto.data);
              } catch (error){
                console.log(error);
              }}
              getSearch();
  
       }, [])

    return(
        <>
          <div>
            <h1 class="titulo-sofas">Sofá de Canto</h1>
          </div>
        <section className="section-api-sofas">
          
            {sofascanto.map((sofascanto) =>(
                <Canto sofascanto={sofascanto} key={sofascanto.id}/>
            ) )}
        </section>
        </>
    )
}

export default SofasCanto;