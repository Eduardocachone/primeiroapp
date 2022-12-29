import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
function Header(){

    return(
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
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
        </header>
    );
}

export default Header;