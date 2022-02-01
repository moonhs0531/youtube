import React from 'react';
import styled from 'styled-components';

import VideoItem from '../../../shared/item/VideoItem';

const ResultVideos = function ({ data }) {
  console.log('data?', data);
  if (!data) return 'Loading..';

  return (
    <Container>
      <Row>
        {
          data.map((item) => (
            <Col key={item.id}>
              <VideoItem
                      thumbnailUrl={item.snippet.thumbnails.medium.url}
                      title={item.snippet.title}
                      channelTitle={item.snippet.channelTitle}
                      publishedAt={item.snippet.publishedAt}
                      to={`/watch?v=${item.id}`}
              />
            </Col>
          ))
          }
      </Row>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 32px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 -10px;
`;

const Col = styled.div`
  padding: 0 10px;
  margin-bottom: 20px;
`;
export default ResultVideos;
