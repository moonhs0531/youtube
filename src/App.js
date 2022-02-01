import React from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import HeaderContainer from './shared/header/containers/HeaderContainer';
import { GlobalStyle } from './style/GlobalStyle';

const App = function () {
  return (
    <Container>
      <GlobalStyle />
      <HeaderContainer />
      <Routes />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
.flex{
  display: flex;
}
  .content{
    
  }
`;

export default App;
