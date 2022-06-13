import React from 'react';
import './CorpoBaixo.css';
import './Responsividade.css';

const ParteDebaixoCorpo = () => {
    return ( 
        <section class="corpo-contato">
        <div class="dados-corpo  animacao">
          <h2 class="h2-corpo-contato">Dados</h2>
          <a href="#">(19) 98901-3589</a>
          <br />
          <br />
          <a href="mailto:estofadosoliveiracontato@gmail.com">ESTOFADOSOLIVEIRACONTATO@GMAIL.COM</a>
          <br />
          <br />
          <a href="$">FACEBOOK.COM/ESTOFADOSOLIVEIRA</a>
        </div>
        <div class="horarios-corpo animacao">
          <h2 class="h2-corpo-contato">Horários</h2>
          <a href="https://www.google.com/maps/place/Estofados+oliveira/@-22.94158,-47.209622,13z/data=!4m12!1m6!3m5!1s0x0:0xe2d0aa63c7e2a39a!2sEstofados+oliveira!8m2!3d-22.94158!4d-47.2096221!3m4!1s0x0:0xe2d0aa63c7e2a39a!8m2!3d-22.94158!4d-47.2096221?hl=pt-BR">
            SEGUNDA À SEXTA: 08 ÀS 18
            <br />
            <br />
            SÁBADO: 08 ÀS 12
            <br />
            <br />
            DOMINGO: FECHADO
          </a>
        </div>
        <div class="endereco-corpo animacao">
          <h2 class="h2-corpo-contato">Endereço</h2>
          <a href="https://www.google.com/maps/place/Estofados+oliveira/@-22.94158,-47.209622,13z/data=!4m12!1m6!3m5!1s0x0:0xe2d0aa63c7e2a39a!2sEstofados+oliveira!8m2!3d-22.94158!4d-47.2096221!3m4!1s0x0:0xe2d0aa63c7e2a39a!8m2!3d-22.94158!4d-47.2096221?hl=pt-BR">
            ESTRADA MUNICIPAL DA PAZ
            <br />
            <br />
            CAMPINAS - SP
            <br />
            <br />
            13058-005
          </a>
        </div>
      </section>
     );
}

function animacao() {
    var reveals = document.querySelectorAll(".animacao");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("ativo");
      } else {
        reveals[i].classList.remove("ativo");
      }
    }
  }
  
  window.addEventListener("scroll", animacao);
 
export default ParteDebaixoCorpo;