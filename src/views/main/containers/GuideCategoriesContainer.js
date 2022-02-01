import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ScrollCategories from '../componenets/ScrollCategories';

const GuideCategoriesContainer = function () {
  const [categories, setCategories] = useState([]);

  const getGuideCategories = async () => {
    const config = {
      url: 'https://www.googleapis.com/youtube/v3/videoCategories',
      method: 'get',
      params: {
        part: 'id, snippet',
        regionCode: 'kr',
        hl: 'ko',
        key: 'AIzaSyCwC0xB6LcLXsVciMbgVI9gU0xtO_uXZrE',
      },
    };

    const result = await axios(config);
    setCategories(result.data.items);
    console.log(result);
  };

  useEffect(() => {
    getGuideCategories();
  }, []);

  return (
    <Container>
      <ScrollCategories data={categories} />
    </Container>
  );
};

const Container = styled.div`
p{
  color: red;
}
`;

export default GuideCategoriesContainer;
