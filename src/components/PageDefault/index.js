import React from 'react';

import Menu from '../Menu';
import Footer from '../Footer';

function PageDefault({ children }) {
  return (
    <>
      <Menu />
        {children}
      <Footer />
    </>
  );
}

export default PageDefault;
