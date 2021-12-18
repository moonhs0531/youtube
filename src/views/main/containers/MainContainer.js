import React from 'react';
import styled from 'styled-components';

import MainVideosContainer from './MainVideosContainer';
import SortVideosContainer from './SortVideosContainer';
import { ContentContainer } from '../../../shared/layout/Layout.styled';

const MainContainer = function () {
  return (
    <Container>
      <SortVideosContainer />
      <ContentContainer>
        <MainVideosContainer />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #181818;
`;

export default MainContainer;
