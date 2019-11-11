import { useState, useEffect } from 'react';

import { fetchPortofolios, addPortofolio, updatePortofolio, deletePortofolio } from '../api/portofolio';
import { IPortofolio } from '../interfaces/portofolio';

export const usePortofolios = () => {
  const [portofolios, setPortofolios] = useState<IPortofolio[]>([]);

  useEffect(() => {
    getPortofolios();
  }, []);

  const getPortofolios = async () => {
    const portofolios = await fetchPortofolios();
    setPortofolios(portofolios);
  };

  const addNewPortofolio = async (newPortofolio: IPortofolio) => {
    await addPortofolio(newPortofolio);
    setPortofolios(portofolios.concat(newPortofolio));
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
    addNewPortofolio,
    deleteSelectedPortofolio,
    editPortofolioValue,
    editSelectedPortofolio,
  };
};
