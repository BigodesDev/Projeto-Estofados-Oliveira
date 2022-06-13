import React, {useState,useEffect} from 'react';
import api from '../../Services/api';
import Retratil from './Retratil';
import IMG from '../../../assets/images/Sofa-retratil.jpeg'

function SofasRetratil () {


    const [sofasretratil, setSofasRetratil] =  useState([]);
  
       useEffect(() => {   
           const getSearch = async () => {
             try {
               const sofasretratil = await api.get('/sofas-retratil') 
               setSofasRetratil(sofasretratil.data);
              } catch (error){
                console.log(error);
              }}
              getSearch();
  
       }, [])

    return(
        <>
          <div>
            <h1 class="titulo-sofa">Sofás</h1>
          </div>
          <div>
            <h1 class="titulo-sofas">Sofá Retrátil</h1>
          </div>

        <section className="section-api-sofas">
          
            {sofasretratil.map((sofasretratil) =>(
                <Retratil sofasretratil={sofasretratil} key={sofasretratil.id}/>
            ) )}
        </section>
        </>
    )
}

export default SofasRetratil;