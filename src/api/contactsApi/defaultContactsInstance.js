import axios from 'axios';
import { API } from './apiConstants';

export const instance = axios.create({
  baseURL: API.BASE_URL,
});
