import React from 'react';
import styled from 'styled-components';

import MainVideosContainer from './MainVideosContainer';
import SortVideosContainer from './SortVideosContainer';

const MainContainer = function () {
  return (
    <Container>
      <SortVideosContainer />
      <MainVideosContainer />
    </Container>
  );
};

const Container = styled.div`

`;

export default MainContainer;
