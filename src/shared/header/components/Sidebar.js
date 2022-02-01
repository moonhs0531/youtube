import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

const Sidebar = function () {
  const [open, setOpen] = useState(true);

  return (
    <Container>
      <AiOutlineMenu onClick={(e) => setOpen(!open)} />
    </Container>
  );
};

const Container = styled.div`

    font-size: 24px;
  cursor: pointer;
`;

export default Sidebar;
