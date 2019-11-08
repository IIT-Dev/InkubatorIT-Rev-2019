import axios from 'axios';

import { IPeople } from '../interfaces/people';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const fetchPeoples = async setPeoples => {
  const response = await api.get('/peoples');
  setPeoples(response.data);
};

export const editPeople = async (updatedPeople: IPeople) => {
  await api.put(`/peoples/${updatedPeople._id}`, updatedPeople);
};

export const deletePeople = async (people: IPeople) => {
  await api.delete(`/peoples/${people._id}`);
};

export const fetchPortofolios = async setPortofolios => {
  const response = await api.get('/peoples');
  setPortofolios(response.data);
};
