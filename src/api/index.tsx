import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://iit-server.herokuapp.com/',
  withCredentials: true,
});
