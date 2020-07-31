import React from 'react';

import './Menu.css';

import Logo from '../../assets/img/Logo.png';
import Button from '../Button';

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

      <Button
        as="a"
        className="ButtonLink"
        href="/"
      >
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;
