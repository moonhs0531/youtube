import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import SearchBox from '../../serachBox';
import Nav from '../components/Nav';

const HeaderContainer = function () {
  return (
    <Container>
      <Logo />
      <SearchBox />
      <Nav />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: #333;
  color: #fff;
`;

export default HeaderContainer;
