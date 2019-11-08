import axios from 'axios';

import { IPortofolio } from '../interfaces/portofolio';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

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
