import React from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import HeaderContainer from './shared/header/containers/HeaderContainer';
import GnbContainer from './shared/gnb/containers/GnbContainer';
import { GlobalStyle } from './style/GlobalStyle';

const App = function () {
  return (
    <Container>
      <GlobalStyle />
      <HeaderContainer />
      <GnbContainer />
      <Routes />
    </Container>
  );
};

const Container = styled.div`

`;

export default App;
