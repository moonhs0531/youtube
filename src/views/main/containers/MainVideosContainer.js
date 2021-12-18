import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getVideos } from '../../../redux/videos/slice';

const MainVideosContainer = function () {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.videos.list);
  useEffect(() => {
    dispatch(getVideos({}));
  }, []);

  if (!list.items) return 'Loading..';
  return (
    <Container>
      {
            list.items.map((item) => <img src={item.snippet.thumbnails.medium.url} alt="" />)
        }
    </Container>
  );
};

const Container = styled.div`

`;

export default MainVideosContainer;
