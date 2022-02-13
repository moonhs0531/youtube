import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import CommentsComponent from '../componenets/CommentsComponent';
import { getComment } from '../../../redux/comment/slice';

const CommentContainer = function () {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.comment.result);
  const location = useLocation();
  const paramsStr = location.search;

  const { v } = qs.parse(paramsStr, { ignoreQueryPrefix: true });
  console.log('v', v);

  useEffect(() => {
    dispatch(getComment({ id: v }));
  }, []);

  return (
    <Container>
      <CommentsComponent />
    </Container>
  );
};

const Container = styled.div`

`;

export default CommentContainer;
