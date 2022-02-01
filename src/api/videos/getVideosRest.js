import axios from 'axios';

export const getVideosRest = async () => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/videos',
      params: {
        part: 'id, snippet',
        chart: 'mostPopular',
        key: 'AIzaSyCwC0xB6LcLXsVciMbgVI9gU0xtO_uXZrE',
        regionCode: 'kr',
        hl: 'ko',
        maxResults: 30,
      },
    });

    return data;
  } catch (e) {
    throw new Error(e);
  }
};
