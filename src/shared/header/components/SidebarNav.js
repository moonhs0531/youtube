import React from 'react';
import styled from 'styled-components';

const SidebarNav = function ({ setOpen }) {
  return (

    <Container>
      <div>icon과 메뉴이름</div>
      <div>icon과 메뉴이름</div>
      <div>icon과 메뉴이름</div>
      <div>icon과 메뉴이름</div>
      <div>icon과 메뉴이름</div>
      <div>icon과 메뉴이름</div>
    </Container>
  );
};

const Container = styled.div`
  width: 240px !important;
`;

export default SidebarNav;
