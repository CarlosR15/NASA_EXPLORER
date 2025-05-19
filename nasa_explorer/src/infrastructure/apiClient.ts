import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.nasa.gov',
  params: {
    api_key: process.env.EXPO_PUBLIC_NASA_API_KEY,
  },
});

export default api;
