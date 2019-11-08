import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const fetchPeoples = async setPeoples => {
  const response = await api.get('/peoples');
  setPeoples(response.data);
};

export const fetchPortofolios = async setPortofolios => {
  const response = await api.get('/peoples');
  setPortofolios(response.data);
};
