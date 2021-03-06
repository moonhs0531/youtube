import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import DetailComponent from '../componenets/DetailComponent';
import { getVideoById } from '../../../redux/videos/slice';

const WatchContainer = function () {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.videos.detail);
  const location = useLocation();
  const paramsStr = location.search;

  const { v } = qs.parse(paramsStr, { ignoreQueryPrefix: true });

  useEffect(() => {
    dispatch(getVideoById({ id: v }));
  }, [v]);

  if (!detail.undefined?.items) return 'Loading..';

  return (
    <Container>
      <DetailComponent data={detail.undefined.items[0]} />
    </Container>
  );
};

const Container = styled.div`
background-color: #000;
  padding: 24px;
`;

export default WatchContainer;
