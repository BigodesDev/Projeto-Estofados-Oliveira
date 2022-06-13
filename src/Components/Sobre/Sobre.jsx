import React from 'react';
import imgSobre from '../../assets/images/ImagemSobre.jpeg';
import './CssSobre.css';
import './Responsive.css';

function Sobre() {
    return (
      <div >
       <header class="body-sobre" > 
        <h2 class="title-sobre">Conheça Nossa História</h2>                                                                
        <nav class="nav-sobre"> 
         <img class="img-sobre" src={imgSobre} alt="Ilustração"/>    
          <section class="section-sobre">          
             <p>Presente no mercado desde 2015, escolher por nossos produtos é preferir conforto e qualidade.
                Nossa fábrica se encontra em Campinas/SP no Distrito do Campo Grande, com atendimento em toda região ao
                entorno de Campinas, com uma variedade de produtos como Sofás, Poltronas, Cabeceira de Cama, Baú de Cama, 
                Puffs, entre outros produtos...</p>
             <p>Tudo isso com uma equipe totalmente qualificada, juntamente com matéria-prima de qualidade dando ao cliente
                um produto de alta qualidade e durabilidade que é seu novo estofado.</p>
             <p>Nós da Estofados Oliveira fazemos peças únicas e personalizáveis como você preferir para seu ambiente.</p>
             <p>A nossa empresa, pode até ser pequena, mas isso não implica na qualidade dos produtos.
                Acreditamos que é possível oferecer um serviço de alta qualidade a preços totalmente acessíveis.</p>
         </section>
        </nav>
       </header>
      </div>
    );
  }
  
  export default Sobre;