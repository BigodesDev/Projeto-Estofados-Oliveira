import React from "react";
import './Footer.css';
import LogoFacebook from '../../../assets/images/facebook-logo.png';
import LogoInstagram from '../../../assets/images/instagram-logo.png';
import LogoWhasapp from '../../../assets/images/whatsapp-logo.png';

function Footer(){
    return(
        <div>
            <footer className="footer-site">
                <nav className="nav-footer">
                    <div>
                        <li className="li-copyright">Projeto Desenvolvido pelos Alunos do Senac - Campinas e o Site <a className="li-copyright-bigodes" href="https://www.bigodesdev.com.br/">BigodesDev</a></li>  
                    </div>
                    <ul className="ul-social">
                        <li className="li-rede-social"><a className="a-link-social" href="https://www.facebook.com/profile.php?id=100081261264310"><img className="image-social" src={LogoFacebook} alt="Facebook"/></a></li>            
                        <li className="li-rede-social"><a className="a-link-social" href="https://www.instagram.com/estofadosoliveiraa/"><img className="image-social" src={LogoInstagram} alt="Instagram"/></a></li>  
                        <li className="li-rede-social"><a className="a-link-social" href="https://api.whatsapp.com/send/?phone=%2B5519981562567&text&app_absent=0"><img className="image-social" src={LogoWhasapp} alt="Whatsapp"/></a></li>
                    </ul>          
                </nav>
            </footer>
        </div>
    )
}

export default Footer;