import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const VideoItem = function ({
  thumbnailUrl, channelTitle, publishedAt, title, to,
}) {
  return (
    <Container to={to}>
      <Thumb>
        <img src={thumbnailUrl} alt="" />
        <div>
          <h3>
            {title}
          </h3>
          <p>
            {channelTitle}
          </p>
          <p>
            {publishedAt}
          </p>
        </div>
      </Thumb>
    </Container>
  );
};

const Container = styled(Link)`
  display: block;
`;

const Thumb = styled.div`
  max-width: 320px;
    img{
      height: 180px;
      width: 100%;
      object-fit: cover;
    }
  
  h3{
    font-size: 16px;
    color: #fff;
    font-weight: 700;
    margin: 12px 0 4px 0;
  }
  p{
    color: #aaa;
    font-size: 14px;
  }
`;

export default VideoItem;
