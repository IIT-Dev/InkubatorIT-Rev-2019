import { IPortofolio } from '../interfaces/portofolio';
import { api } from '.';

export const fetchPortofolios = async () => {
  const response = await api.get('/portofolios');
  return response.data;
};

export const addPortofolio = async (newPortofolio: IPortofolio) => {
  await api.post('/portofolios', newPortofolio);
};

export const updatePortofolio = async (updatedPortofolio: IPortofolio) => {
  await api.put(`/portofolios/${updatedPortofolio._id}`, updatedPortofolio);
};

export const deletePortofolio = async (_id: string) => {
  await api.delete(`/portofolios/${_id}`);
};
