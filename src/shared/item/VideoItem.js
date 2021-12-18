import React from 'react';
import styled from 'styled-components';

const VideoItem = function ({ item }) {
  return (
    <Container>
      <Thumb>
        <img src={item.snippet.thumbnails.medium.url} alt="" />
        <div>
          <h3>
            {item.snippet.localized.title}
          </h3>
          <p>
            {item.snippet.channelTitle}
          </p>
          <p>
            {item.snippet.publishedAt}
          </p>
        </div>
      </Thumb>
    </Container>
  );
};

const Container = styled.div`

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
