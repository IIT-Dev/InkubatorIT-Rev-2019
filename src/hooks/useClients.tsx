import { useState, useEffect } from 'react';

import { fetchClients, addClient, updateClient, deleteClient } from '../api/client';
import { IClient } from '../interfaces/client';

export const useClients = () => {
  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    const clients = await fetchClients();
    setClients(clients);
  };

  const addNewClient = async (newClient: IClient) => {
    await addClient(newClient);
    setClients(clients.concat(newClient));
  };

  const deleteSelectedClient = (_id: string) => {
    setClients(clients.filter(people => people._id !== _id));
    deleteClient(_id);
  };

  const editClientValue = (event: React.ChangeEvent<HTMLInputElement>, client: IClient) => {
    const editedClient = { ...clients.find(p => p._id === client._id) };
    editedClient[event.target.id] = event.target.value;

    const updatedClientIndex = clients.findIndex(p => p._id === client._id);
    const updatedClients = [...clients];

    updatedClients[updatedClientIndex] = editedClient;
    setClients(updatedClients);
  };

  const editSelectedClient = async (client: IClient) => {
    await updateClient(client);

    const copiedClients = [...clients];
    const updatedClientIndex = copiedClients.findIndex(p => p._id === client._id);

    copiedClients[updatedClientIndex] = client;
    setClients(copiedClients);
  };

  return {
    clients,
    getClients,
    addNewClient,
    deleteSelectedClient,
    editClientValue,
    editSelectedClient,
  };
};
