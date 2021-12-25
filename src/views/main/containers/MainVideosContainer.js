import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getVideos } from '../../../redux/videos/slice';
import VideoItem from '../../../shared/item/VideoItem';

const MainVideosContainer = function () {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.videos.list);
  useEffect(() => {
    dispatch(getVideos({}));
  }, []);

  if (!list.items) return 'Loading..';

  return (
    <Container>
      <Row>
        {
          list.items.map((item) => (
            <Col key={item.id}>
              <VideoItem
                thumbnailUrl={item.snippet.thumbnails.medium.url}
                title={item.snippet.localized.title}
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
  padding-top: 32px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Col = styled.div`
    padding: 0 10px;
  margin-bottom: 20px;
`;

export default MainVideosContainer;
