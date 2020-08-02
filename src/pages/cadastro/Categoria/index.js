import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault'

function RegisterCategory() {
  const [categories, setCategories] = useState(['teste']);
  const [categoryName, setCategoryName] = useState('');

  function handleCategoryName({ target }) {
    setCategoryName(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setCategories([
      ...categories,
      categoryName,
    ]);

    setCategoryName('');
  }

  return (
    <>
      <PageDefault>
        <h1>Cadastro de categoria: {categoryName}</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Nome da categoria:
            <input
              type="text"
              value={categoryName}
              onChange={handleCategoryName}
            />
          </label>

          <ul>
            {categories.map((cat, index) => {
              return (
                <li key={`${cat}-${index}`}>
                  {cat}
                </li>
              )
            })}
          </ul>

          <button>
            Cadastrar
          </button>
        </form>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    </>
  );
}

export default RegisterCategory;
