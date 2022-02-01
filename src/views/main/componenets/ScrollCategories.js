import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { IconAngleLeft, IconAngleRight } from '../../../icons';

const ScrollCategories = function ({ data }) {
  const trackRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);

  const handleScroll = (e) => {
    const { scrollWidth, clientWidth } = e.target;
    setScrollLeft(e.target.scrollLeft);
    setMaxScroll(scrollWidth - clientWidth);
  };

  const start = scrollLeft === 0;
  const end = scrollLeft === maxScroll;

  const scrollToLeft = () => {
    trackRef.current.scrollLeft -= 300;
  };

  const scrollToRight = () => {
    trackRef.current.scrollLeft += 300;
  };

  return (
    <Container>
      {
        !start
          && (
          <>
            <Arrow className="left" onClick={scrollToLeft}>
              <IconAngleLeft />
            </Arrow>
            <Fog className="left" />
          </>
          )
      }
      <Track onScroll={handleScroll} ref={trackRef}>
        <SortButton>All</SortButton>
        {
        data.map((item) => <SortButton>{item.snippet.title}</SortButton>)
      }
      </Track>
      {
        !end
          && (
          <>
            <Arrow className="right" onClick={scrollToRight}>
              <IconAngleRight />
            </Arrow>
            <Fog className="right" />
          </>
          )
      }
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 0 24px;
  border-bottom: 1px solid #333;
  border-top: 1px solid #333;
`;

const SortButton = styled.button`
  font-size: 14px;
  height: 32px;
  color: #fff;
  padding: 0 12px;
  margin: 14px 14px 14px 0px;
  background-color: rgba(255,255,255, 0.1);
  border-radius: 50px;
  border: 1px solid #888;
  white-space: nowrap;
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
`;
const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  width: 40px;
  height: 56px;
  font-size: 16px;
  fill: #fff;
  background: #212121;
  cursor: pointer;
  
  &.left{
    left: 0;
  }
  
  &.right{
    right:0;
  }
  
`;

const Fog = styled.div`
  background-image: linear-gradient(to right,#212121 20%,rgba(33,33,33,0) 80%);
  position: absolute;
  top: 0;
  bottom: 0;
  width: 66px;
  height: 56px;
  pointer-events: none;
  
  &.left{
    left: 40px;
  }
  
  &.right{
    right:40px;
    transform: rotate(180deg);
  }
`;

export default ScrollCategories;
