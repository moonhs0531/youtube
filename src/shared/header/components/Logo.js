import React from 'react';
import styled from 'styled-components';

import { IconLogo } from '../../../icons';

const Logo = function () {
  return (
    <Container>
      <LogoContainer>
        <IconLogo />
      </LogoContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 18px 14px 18px 16px;
`;

const LogoContainer = styled.div`
  width: 97px;
  height: 20px;
`;

export default Logo;
