import React from 'react';
import styled from 'styled-components';

import { MakeVideo } from '../../../icons';

const Nav = function () {
  return (
    <Container>
      <NavItem>
        <NavLink>
          <MakeVideo />
        </NavLink>
        <NavLink>
          <MakeVideo />
        </NavLink>
        <NavLink>
          <MakeVideo />
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
    width: 24px;
  height: 24px;
`;

export default Nav;
