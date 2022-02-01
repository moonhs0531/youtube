import React from 'react';
import styled from 'styled-components';

import { IconNotification, IconYoutubeApp, MakeVideo } from '../../../icons';

const Nav = function () {
  return (
    <Container>
      <NavItem>
        <NavLink>
          <MakeVideo />
        </NavLink>
        <NavLink>
          <IconYoutubeApp />
        </NavLink>
        <NavLink>
          <IconNotification />
        </NavLink>
      </NavItem>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const NavItem = styled.div`
  display: flex;
  padding: 16px;
`;

const NavLink = styled.div`
    width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg{
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

export default Nav;
