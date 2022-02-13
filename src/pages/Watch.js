import React from 'react';
import styled from 'styled-components';

import WatchContainer from '../views/watch/containers/WatchContainer';
import CommentContainer from '../views/watch/containers/CommentContainer';

const Watch = function () {
  return (
    <Container>
      <WatchContainer />
      <CommentContainer />
    </Container>
  );
};

const Container = styled.div`
      
`;

export default Watch;
