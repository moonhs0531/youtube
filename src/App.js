import React from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import HeaderContainer from './shared/header/containers/HeaderContainer';
import GnbContainer from './shared/gnb/containers/GnbContainer';

const App = function () {
  return (
    <Container>
      <HeaderContainer />
      <GnbContainer />
      <Routes />
    </Container>
  );
};

const Container = styled.div`

`;

export default App;
