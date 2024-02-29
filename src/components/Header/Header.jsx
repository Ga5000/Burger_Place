import React, { useEffect, useState } from 'react';
import Menu from './Menu.jsx';
import './styles/header.css'
import MenuIcon from '/menu_icon.svg';
function Header() {

  const [isMenuVisible,setMenuVisible] = useState(false);
  const linkHomeClick = () => {
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setMenuVisible((m) => !m);
  };
  useEffect(() => {
  },[isMenuVisible]);

  return (
    <>
    <div className='header-nav-container'>
        <div className="title-container">
      <img onClick={linkHomeClick} src="./imgs/burger_icon.png" alt="burger-icon" className='burger-icon-img'/>  
      <h3 onClick={linkHomeClick} className="title">Burger Place</h3>
      </div>
      <nav className='nav-bar'>
      <img onClick={toggleMenu} className='menu-icon' src={MenuIcon} alt="menu-icon" />
      <h3 onClick={toggleMenu} className='menu-text'>Menu</h3>
      </nav>
    </div>
    {isMenuVisible && <Menu toggleMenu={toggleMenu}/>};
    </>
    
  );
}

export default Header;
