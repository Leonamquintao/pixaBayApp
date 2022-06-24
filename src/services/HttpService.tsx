import axios from 'axios';

const API_KEY = '28254303-290d4a182af1b5981ce661ca6';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}`;

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchApiData = async (page: number, query: string) => {
  const qr = query.replace(' ', '+');
  const route = `${BASE_URL}&q=${qr}&image_type=photo&per_page=5&page=${page}`;
  return await axios.get(route);
};
