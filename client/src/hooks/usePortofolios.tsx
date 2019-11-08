import { useState, useEffect } from 'react';

import { fetchPortofolios, addPortofolio, updatePortofolio, deletePortofolio } from '../api/portofolio';
import { IPortofolio } from '../interfaces/portofolio';

const initialNewPortofolio: IPortofolio = { title: '', platform: '', imageUrl: '', description: '' };

export const usePortofolios = () => {
  const [portofolios, setPortofolios] = useState<IPortofolio[]>([]);
  const [newPortofolio, setNewPortofolio] = useState<IPortofolio>(initialNewPortofolio);

  useEffect(() => {
    getPortofolios();
  }, []);

  const getPortofolios = async () => {
    const portofolios = await fetchPortofolios();
    setPortofolios(portofolios);
  };

  const addNewPortofolio = () => {
    setPortofolios(portofolios.concat(newPortofolio));
    setNewPortofolio(initialNewPortofolio);
    addPortofolio(newPortofolio);
  };

  const editNewPortofolioValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPortofolio({ ...newPortofolio, [event.target.id]: event.target.value });
  };

  const deleteSelectedPortofolio = (_id: string) => {
    setPortofolios(portofolios.filter(people => people._id !== _id));
    deletePortofolio(_id);
  };

  const editPortofolioValue = (event: React.ChangeEvent<HTMLInputElement>, portofolio: IPortofolio) => {
    const editedPortofolio = { ...portofolios.find(p => p._id === portofolio._id) };
    editedPortofolio[event.target.id] = event.target.value;

    const updatedPortofolioIndex = portofolios.findIndex(p => p._id === portofolio._id);
    const updatedPortofolios = [...portofolios];

    updatedPortofolios[updatedPortofolioIndex] = editedPortofolio;
    setPortofolios(updatedPortofolios);
  };

  const editSelectedPortofolio = (portofolio: IPortofolio) => {
    updatePortofolio(portofolio);
  };

  return {
    portofolios,
    getPortofolios,
    newPortofolio,
    addNewPortofolio,
    editNewPortofolioValue,
    deleteSelectedPortofolio,
    editPortofolioValue,
    editSelectedPortofolio,
  };
};
