import axios from 'axios';

export const getVideoByIdRest = async ({ id }) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/videos',
      params: {
        part: 'id, snippet',
        regionCode: 'kr',
        hl: 'ko',
        id,
        // key: 'AIzaSyD2Buic_jeTe_bX8KSr9hdhnedk0jbT4gs',
        key: 'AIzaSyCwC0xB6LcLXsVciMbgVI9gU0xtO_uXZrE',
      },
    });

    return data;
  } catch (e) {
    throw new Error(e);
  }
};
