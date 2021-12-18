import React from 'react';
import styled from 'styled-components';

import VideoItem from '../../item/VideoItem';

const VideoList = function ({ data }) {
  return (
    <Container>
      {
            data.items.map((item) => <VideoItem item={item} />)
        }
    </Container>
  );
};

const Container = styled.div`

`;

export default VideoList;
