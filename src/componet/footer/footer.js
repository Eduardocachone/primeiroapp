import React from "react";
import './footer.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'

function Footer(){
    return(
        <>
            <footer>
                <img id="logo" src={Logo}/>
                 <nav  className="footer-nav">
                    <ul className="footer-list">
                        <Link style={{textDecoration : 'none'}} to='/'>
                        <li>home</li>
                        </Link>
                        <Link style={{textDecoration : 'none'}} to='/contato'>
                        <li>contato</li>
                        </Link>
                        <Link  style={{textDecoration : 'none'}} to='/fotos'>
                        <li>fotos</li>
                        </Link>
                        <Link style={{textDecoration : 'none'}} to='/comentarios'>
                        <li>comentarios</li>
                        </Link>
                    </ul>
                </nav>

                <span>todos os direitos reservados ©</span>
                <span>Desenvolvido por: Eduardo Cachone</span>
            </footer>
        </>
    );
}

export default Footer;

