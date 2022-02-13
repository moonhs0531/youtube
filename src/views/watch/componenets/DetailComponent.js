import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

const DetailComponent = function ({ data }) {
  const location = useLocation();
  const paramsStr = location.search;

  const { v } = qs.parse(paramsStr, { ignoreQueryPrefix: true });

  return (
    <Container>
      <div className="media">
        <iframe title="myFrame" src={`https://www.youtube.com/embed/${v}`} allowFullScreen />
      </div>
      <Title>
        <p>{data.snippet?.title}</p>
      </Title>
    </Container>
  );
};

const Container = styled.div`

  .media {
    position: relative;
    padding-bottom: 56.25%; /* proportion value to aspect ratio 16:9 (9 / 16 = 0.5625 or 56.25%) */
    height: 0;
    overflow: hidden;
  }

  .media iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
`;

const Title = styled.div`
  padding: 20px 0 8px 0;
    p{
      color: #fff;
      font-size: 26px;
    }
`;

export default DetailComponent;
