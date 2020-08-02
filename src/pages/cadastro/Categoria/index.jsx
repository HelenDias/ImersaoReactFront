import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function RegisterCategory() {
  const URL_DEV = 'http://localhost:8080/categories';
  const URL_PROD = 'https://cubo-flix.herokuapp.com/categories';

  const URL = window.location.href.includes('localhost')
    ? URL_DEV
    : URL_PROD;

  const initialValues = {
    name: '',
    description: '',
    color: '#000',
    url: '',
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  function saveCategory() {
    const data = {
      name: values.name,
      color: values.color,
      link_extra: {
        text: values.description,
        url: values.url,
      },
    };

    console.log(data);
    // TODO - chamar o repository
  }

  function handleSubmit(e) {
    e.preventDefault();

    setCategories([
      ...categories,
      values,
    ]);

    setValues(initialValues);

    saveCategory();
  }

  // useEffect recebe dois parâmetros, sendo eles:
  // 1. o que eu quero que aconteça (função que faz algo)
  // 2. quando eu quero que isso aconteça (é opcional).
  // Se passar um array vazio no 2º, vai acontecer apenas uma vez
  useEffect(() => {
    fetch(URL)
      .then(async (responseFromServer) => {
        const response = await responseFromServer.json();
        setCategories([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Link"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
