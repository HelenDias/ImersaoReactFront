import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesFound) => {
        console.log(categoriesFound);
        return setInitialData(categoriesFound);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {
        initialData.length === 0
          ? (<p>Carregando...</p>)
          : (
            <>
              <BannerMain
                videoTitle={initialData[0].videos[0].titulo}
                url={initialData[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />

              {initialData.map((category, index) => (
                <Carousel
                  ignoreFirstVideo={!!index === 0}
                  category={category}
                />
              ))}
            </>
          )
      }
    </PageDefault>
  );
}

export default Home;
