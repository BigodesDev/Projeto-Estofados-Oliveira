import React from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import './Corpo.css';
import './Responsividade.css';

const CorpoContato = () => {
    function sendEmail(e){
      e.preventDefault();

      emailjs.sendForm('service_pi2u12a', 'template_k2a43fo', e.target,'JV740cJy3BeikRlho')
      .then(res=>{
        swal('Enviado', 'E-mail enviado com sucesso !', 'success');
      })
    };

    return (
        <main class="alinhamento">
        <div class="alinhadiv1">
          <h2 class="titulo1">Google Maps</h2>
          <iframe
            class="maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41538.2148440364!2d-47.216330400123034!3d-23.042337543118002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b7f95701e9df%3A0xe2d0aa63c7e2a39a!2sEstofados%20oliveira!5e0!3m2!1spt-BR!2sbr!4v1648592989879!5m2!1spt-BR!2sbr"
          ></iframe>
        </div>
        <div class="alinhadiv2">
          <h2 class="titulo2">Formulário</h2>
          <form class="formulario" onSubmit={sendEmail}>
          <div class="mb-3">
            <label for="form" class="form-label">Nome:</label>
            <input
              name="name"
              type="text"
              class="form-control"
              id="form"
              required placeholder="Digite o seu nome"
            />
          </div>
          <div class="mb-3">
            <label for="form" class="form-label">E-mail:</label>
            <input
              name="email"
              type="email"
              class="form-control"
              id="form"
              required placeholder="Digite o seu E-mail"
            />
          </div>
          <div class="mb-3">
            <label for="form" class="form-label">Assunto:</label>
            <input
              name="subject"
              type="text"
              class="form-control"
              id="form"
              required placeholder="Digite o assunto da mensagem"
            />
          </div>
          <div class="mb-3">
            <label for="form-message" class="form-label">Mensagem:</label>
            <textarea
              type="massege"
              name="massege"
              class="form-control"
              id="form"
              rows="3"
              required placeholder="Deixe aqui sua mensagem"
            ></textarea>
          </div>
          <input type="submit" class="botao" value="Enviar"></input>
          </form>
        </div>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
      </main>
    );
}
 
export default CorpoContato ;