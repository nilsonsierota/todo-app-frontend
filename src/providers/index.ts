import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://localhost:3333/api',
});
