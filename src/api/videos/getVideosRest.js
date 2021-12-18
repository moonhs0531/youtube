import axios from 'axios';

export const getVideosRest = async () => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/videos',
      params: {
        part: 'id, snippet',
        chart: 'mostPopular',
        key: 'AIzaSyD2Buic_jeTe_bX8KSr9hdhnedk0jbT4gs',
      },
    });

    return data;
  } catch (e) {
    throw new Error(e);
  }
};
