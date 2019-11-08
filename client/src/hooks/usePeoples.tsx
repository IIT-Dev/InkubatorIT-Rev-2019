import { useState, useEffect } from 'react';

import { IPeople } from '../interfaces/people';
import { fetchPeoples, addPeople, updatePeople, deletePeople } from '../api/people';

const initialNewPeople = { name: '', role: '', imageUrl: '' };

export const usePeoples = () => {
  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const [newPeople, setNewPeople] = useState<IPeople>(initialNewPeople);

  useEffect(() => {
    getPeoples();
  }, []);

  const getPeoples = async () => {
    const peoples = await fetchPeoples();
    setPeoples(peoples);
  };

  const addNewPeople = () => {
    setPeoples(peoples.concat(newPeople));
    setNewPeople(initialNewPeople);
    addPeople(newPeople);
  };

  const editNewPeopleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPeople({ ...newPeople, [event.target.id]: event.target.value });
  };

  const deleteSelectedPeople = (people: IPeople) => {
    setPeoples(peoples.filter(p => p._id !== people._id));
    deletePeople(people);
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
    addNewPeople,
    editNewPeopleValue,
    deleteSelectedPeople,
    editPeopleValue,
    editSelectedPeople,
  };
};
