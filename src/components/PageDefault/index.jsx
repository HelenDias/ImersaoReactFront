import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  ${({ paddingAll }) => css`
    padding: ${paddingAll}
  `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  paddingAll: '50px 5%',
};

PageDefault.propTypes = {
  children: PropTypes.element.isRequired,
  paddingAll: PropTypes.string,
};

export default PageDefault;
