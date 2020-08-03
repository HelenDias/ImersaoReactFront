import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesFound) => setInitialData(categoriesFound))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <PageDefault paddingAll="0">
      {initialData.length === 0 && (<p>Carregando...</p>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].name}
                url={initialData[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />

              <Carousel
                ignoreFirstVideo
                category={category}
                key={category.id}
              />
            </div>
          );
        }

        return (
          <Carousel
            category={category}
            key={category.id}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
