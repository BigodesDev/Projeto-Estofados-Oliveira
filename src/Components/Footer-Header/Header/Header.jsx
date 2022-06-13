import React from 'react';
import './Header.css';
import Logo from '../../../assets/images/logo.png';

function Header(){
    return(
        <div>
            <header>
                <nav className="nav-header">
                    <div>
                        <a href="/"><img src={Logo} className="logo-header" alt="Logo"/></a>
                    </div>
                    <button className="button-menu-header">&#9776;</button>
                    <ul className="ul-menu-header">
                        <a href="/sobre" className='menu-link'>Sobre Nós</a>
                        <a href="/sofa" className='menu-link'>Sofás</a>   
                        <a href="/produtos" className='menu-link'>Produtos</a>   
                        <a href="/contato" className='menu-link'>Contato</a>      
                    </ul>
                </nav>
            </header>
        </div>
    )
} 

export default Header;