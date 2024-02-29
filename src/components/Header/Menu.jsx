import React from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import './styles/menu.css';

function Menu({ toggleMenu }) {
    const locationLink = () => (
        <ScrollLink
            className="options"
            to="locationSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            Localização
        </ScrollLink>
    );

    const contactLink = () => (
        <ScrollLink
            className="options"
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            Contato
        </ScrollLink>
    );

    return (
        <>
            <div className="nav-container">
                <nav className="nav-bar-menu">
                    <div className="close">
                        <button onClick={toggleMenu} className='close-menu'>x</button>
                        <h4 className="close-menu-text">Fechar Menu</h4>
                    </div>
                    <ul>
                    <li><Link to="/History" className="options">Burger Place</Link></li>
            <li><Link to="/Cardapio" className="options">Cardápio</Link></li>
                        {locationLink()}
                        {contactLink()}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Menu;
