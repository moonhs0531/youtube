import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ResultVideos from './ResultVideos';

const ResultContainer = function () {
  const { query } = useParams();
  const [resultVideo, setResultVideo] = useState([]);

  const getResults = async () => {
    const config = {
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'get',
      params: {
        part: 'snippet, id',
        q: query,
        regionCode: 'kr',
        order: 'title',
        maxResults: 30,
        key: 'AIzaSyCwC0xB6LcLXsVciMbgVI9gU0xtO_uXZrE',
      },
    };

    const result = await axios(config);
    setResultVideo(result.data.items);
  };

  useEffect(() => {
    getResults();
  }, [query]);

  return (
    <Container>
      <ResultVideos data={resultVideo} />
    </Container>
  );
};

const Container = styled.div`
  background-color: #212121;
`;

export default ResultContainer;
