import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const fetchPeoples = async setPeoples => {
  const response = await api.get('/peoples');
  setPeoples(response.data);
};

export const editPeople = async updatedPeople => {
  await api.put(`/peoples/${updatedPeople._id}`, updatedPeople);
};

export const deletePeople = async people => {
  await api.delete(`/peoples/${people._id}`);
};

export const fetchPortofolios = async setPortofolios => {
  const response = await api.get('/peoples');
  setPortofolios(response.data);
};
