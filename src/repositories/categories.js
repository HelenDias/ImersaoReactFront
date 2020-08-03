import URL from '../config';

const CATEGORIES_URL = `${URL}/categories?_embed=videos`;

function getAllWithVideos() {
  return fetch(CATEGORIES_URL)
    .then(async (responseFromServer) => {
      if (responseFromServer.ok) return responseFromServer.json();

      throw new Error('Dados não encontrados');
    });
}

export default {
  getAllWithVideos,
};
