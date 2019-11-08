import { useState, useEffect } from 'react';

import { IPeople } from '../interfaces/people';
import { fetchPeoples, addPeople, updatePeople, deletePeople } from '../api/people';

export const usePeople = () => {
  const [peoples, setPeoples] = useState<IPeople[]>([]);

  useEffect(() => {
    getPeoples();
  }, []);

  const getPeoples = async () => {
    const peoples = await fetchPeoples();
    setPeoples(peoples);
  };

  const addNewPeople = (newPeople: IPeople) => {
    setPeoples(peoples.concat(newPeople));
    addPeople(newPeople);
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

  return { peoples, getPeoples, addNewPeople, deleteSelectedPeople, editPeopleValue, editSelectedPeople };
};
