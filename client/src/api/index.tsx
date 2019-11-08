import axios from 'axios';

import { IPeople } from '../interfaces/people';
import { IPortofolio } from '../interfaces/portofolio';

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
  const response = await api.get('/portofolios');
  setPortofolios(response.data);
};

export const editPortofolio = async (updatedPortofolio: IPortofolio) => {
  await api.put(`/portofolios/${updatedPortofolio._id}`, updatedPortofolio);
};

export const deletePortofolio = async (_id: string) => {
  await api.delete(`/portofolios/${_id}`);
};
