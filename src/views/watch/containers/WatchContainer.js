import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import { getVideoById } from '../../../redux/videos/slice';

const WatchContainer = function () {
  const location = useLocation();
  const dispatch = useDispatch();
  const paramsStr = location.search;

  const { v, list } = qs.parse(paramsStr, { ignoreQueryPrefix: true });

  useEffect(() => {
    dispatch(getVideoById({ id: v, list }));
    if (list) {
      dispatch(getPlayList({ id: list }));
    }
  }, []);

  return (
    <Container>
      WatchContainer
    </Container>
  );
};

const Container = styled.div`

`;

export default WatchContainer;
