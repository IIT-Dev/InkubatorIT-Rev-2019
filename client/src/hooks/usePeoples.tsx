import { useState, useEffect } from 'react';

import { IPeople, INewPeople } from '../interfaces/people';
import { fetchPeoples, addPeople, updatePeople, deletePeople } from '../api/people';

const initialNewPeople = { name: '', role: '', image: null };

export const usePeoples = () => {
  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const [newPeople, setNewPeople] = useState<INewPeople>(initialNewPeople);

  useEffect(() => {
    getPeoples();
  }, []);

  const getPeoples = async () => {
    const peoples = await fetchPeoples();
    setPeoples(peoples);
  };

  const addNewPeople = () => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result !== 'string') return;

      setPeoples(peoples.concat({ ...newPeople, imageUrl: reader.result }));
      setNewPeople(initialNewPeople);
      addPeople(newPeople);
    };

    reader.readAsDataURL(newPeople.image);
  };

  const editNewPeopleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPeople({ ...newPeople, [event.target.id]: event.target.value });
  };

  const deleteSelectedPeople = (_id: string) => {
    setPeoples(peoples.filter(people => people._id !== _id));
    deletePeople(_id);
  };

  const editPeopleValue = (event: React.ChangeEvent<HTMLInputElement>, people: IPeople) => {
    const editedPeople = { ...peoples.find(p => p._id === people._id) };
    editedPeople[event.target.id] = event.target.value;

    const updatedPeopleIndex = peoples.findIndex(p => p._id === people._id);
    const updatedPeoples = [...peoples];

    updatedPeoples[updatedPeopleIndex] = editedPeople;
    setPeoples(updatedPeoples);
  };

  const editSelectedPeople = (people: IPeople) => {
    updatePeople(people);
  };

  return {
    peoples,
    getPeoples,
    newPeople,
    setNewPeople,
    addNewPeople,
    editNewPeopleValue,
    deleteSelectedPeople,
    editPeopleValue,
    editSelectedPeople,
  };
};
