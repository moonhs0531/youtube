import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import SearchBox from '../../serachBox';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';

const HeaderContainer = function () {
  return (
    <Container>
      <div>
        <Sidebar />
        <Logo />
      </div>
      <SearchBox />
      <Nav />
    </Container>

  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  padding: 0 20px;
  height: 56px;
  
  >div{
    display: flex;
    align-items: center;
  }
`;

export default HeaderContainer;
