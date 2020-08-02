import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

import Logo from '../../assets/img/Logo.png';
import Button from '../Button';

function Menu() {
  return(
    <nav className="Menu">
      <Link to="/">
        <img
          alt="AluraFlix logo"
          src={Logo}
          className="Logo"
        />
      </Link>

      <Button
        as={Link}
        className="ButtonLink"
        to="/cadastro/video"
      >
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;
