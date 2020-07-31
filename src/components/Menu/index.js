import React from 'react';

import './Menu.css';

import Logo from '../../assets/img/Logo.png';
import ButtonLink from './components/ButtonLink';

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

      <ButtonLink
        className="ButtonLink"
        href="/"
      >
        Novo vídeo
      </ButtonLink>
    </nav>
  )
}

export default Menu;
