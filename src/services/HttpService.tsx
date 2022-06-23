import axios from 'axios';

const API_KEY = '2334cc3456hn13hsi63322';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchApiData = async (page: number, query: string) => {
  const route = `${BASE_URL}&q=${query}&image_type=photo&per_page=10&page=${page}`;
  return await axios.get(route);
};
