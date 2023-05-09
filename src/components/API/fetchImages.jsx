import axios from 'axios';

const API_KEY = '36178055-5590945a2d60c428093fd3cc0';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(inputSearchForm, page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${inputSearchForm}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
