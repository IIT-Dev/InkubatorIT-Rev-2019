import { useState, useEffect } from 'react';

import { fetchPortofolios, addPortofolio, updatePortofolio, deletePortofolio } from '../api/portofolio';
import { IPortofolio } from '../interfaces/portofolio';

export const usePortofolios = () => {
  const [portofolios, setPortofolios] = useState<IPortofolio[]>(null);

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

  const deleteSelectedPortofolio = async (_id: string) => {
    await deletePortofolio(_id);
    setPortofolios(portofolios.filter(people => people._id !== _id));
  };

  const editPortofolioValue = (event: React.ChangeEvent<HTMLInputElement>, portofolio: IPortofolio) => {
    const editedPortofolio = { ...portofolios.find(p => p._id === portofolio._id) };
    editedPortofolio[event.target.id] = event.target.value;

    const updatedPortofolioIndex = portofolios.findIndex(p => p._id === portofolio._id);
    const updatedPortofolios = [...portofolios];

    updatedPortofolios[updatedPortofolioIndex] = editedPortofolio;
    setPortofolios(updatedPortofolios);
  };

  const editSelectedPortofolio = async (portofolio: IPortofolio) => {
    await updatePortofolio(portofolio);

    const copiedPortofolios = [...portofolios];
    const updatedPortofolioIndex = copiedPortofolios.findIndex(p => p._id === portofolio._id);

    copiedPortofolios[updatedPortofolioIndex] = portofolio;
    setPortofolios(copiedPortofolios);
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
