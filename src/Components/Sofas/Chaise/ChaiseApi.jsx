import React, {useState,useEffect} from 'react';
import api from '../../Services/api';
import Chaise from './Chaise';

function SofasChaise () {


    const [sofaschaise, setSofasChaise] =  useState([]);
  
       useEffect(() => {   
           const getSearch = async () => {
             try {
               const sofaschaise = await api.get('/sofas-chaise') 
               setSofasChaise(sofaschaise.data);
              } catch (error){
                console.log(error);
              }}
              getSearch();
  
       }, [])

    return(
        <>
          <div>
            <h1 class="titulo-sofas">Sofá Chaise</h1>
          </div>
        <section className="section-api-sofas">
          
            {sofaschaise.map((sofaschaise) =>(
                <Chaise sofaschaise={sofaschaise} key={sofaschaise.id}/>
            ) )}
        </section>
        </>
    )
}

export default SofasChaise;