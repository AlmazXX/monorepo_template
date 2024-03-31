import axios from 'axios';
import { BASE_URL } from './constants';

export default axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
