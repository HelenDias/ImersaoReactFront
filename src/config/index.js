const URL_DEV = 'http://localhost:8080';
const URL_PROD = 'https://cubo-flix.herokuapp.com';

const URL = window.location.href.includes('localhost')
  ? URL_DEV
  : URL_PROD;

export default URL;
