import axios from 'axios';

export const getCommentRest = async ({ id }) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/comments',
      params: {
        part: 'id, snippet',
        id,
        key: 'AIzaSyCwC0xB6LcLXsVciMbgVI9gU0xtO_uXZrE',
        maxResults: 10,
      },
    });

    console.log(data);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
