import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IconLogo } from '../../../icons';

const Logo = function () {
  return (
    <Container to="/">
      <LogoContainer>
        <IconLogo />
      </LogoContainer>
    </Container>
  );
};

const Container = styled(Link)`
  padding: 18px 14px 18px 16px;
`;

const LogoContainer = styled.div`
  width: 97px;
  height: 20px;
  
  svg{
    fill: #fff;
  }
`;

export default Logo;
