import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault'

function RegisterCategory() {
  return (
    <>
      <PageDefault>
        <h1>Cadastro de categoria</h1>

        <Link to="/cadastro/video">
          Cadastrar vídeo
        </Link>
      </PageDefault>
    </>
  );
}

export default RegisterCategory;
