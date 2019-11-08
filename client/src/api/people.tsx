import { IPeople } from '../interfaces/people';
import { api } from '.';

export const fetchPeoples = async () => {
  const response = await api.get('/peoples');
  return response.data;
};

export const addPeople = async (newPeople: IPeople) => {
  await api.post('/peoples', newPeople);
};

export const updatePeople = async (updatedPeople: IPeople) => {
  await api.put(`/peoples/${updatedPeople._id}`, updatedPeople);
};

export const deletePeople = async (_id: string) => {
  await api.delete(`/peoples/${_id}`);
};
