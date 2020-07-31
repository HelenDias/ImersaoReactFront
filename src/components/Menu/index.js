import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu() {
  return(
    <nav className="Menu">
      <a href="/">
        <img
          alt="AluraFlix logo"
          src={Logo}
          class="Logo"
        />
      </a>
    </nav>
  )
}

export default Menu;
