import { IClient } from '../interfaces/client';
import { api } from '.';

export const fetchClients = async () => {
  const response = await api.get('/client');
  return response.data;
};

export const addClient = async (newClient: IClient) => {
  await api.post('/client', newClient);
};

export const updateClient = async (updatedClient: IClient) => {
  await api.put(`/client/${updatedClient._id}`, updatedClient);
};

export const deleteClient = async (_id: string) => {
  await api.delete(`/client/${_id}`);
};
