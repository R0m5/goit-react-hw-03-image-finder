import axios from 'axios';

// const API_KEY = '36178055-5590945a2d60c428093fd3cc0';
// const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = 'https://pixabay.com/';
axios.defaults.params = {
  key: '36178055-5590945a2d60c428093fd3cc0',
  per_page: 12,
};

const fetchImages = (value, page = 1) => {
  return axios
    .get('api/', {
      params: {
        q: value,
        page,
      },
    })
    .then(data => data);
};

export default fetchImages;
