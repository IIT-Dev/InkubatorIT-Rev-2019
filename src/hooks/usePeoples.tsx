import { useState, useEffect } from 'react';

import { IPeople, INewPeople } from '../interfaces/people';
import { fetchPeoples, addPeople, updatePeople, deletePeople } from '../api/people';

const initialNewPeople = { name: '', role: '', imageUrl: null };

export const usePeoples = () => {
  const [peoples, setPeoples] = useState<IPeople[]>(null);
  const [newPeople, setNewPeople] = useState<INewPeople>(initialNewPeople);

  useEffect(() => {
    getPeoples();
  }, []);

  const getPeoples = async () => {
    const peoples = await fetchPeoples();
    setPeoples(peoples);
  };

  const addNewPeople = async () => {
    await addPeople(newPeople);
    setPeoples(
      peoples.concat({
        _id: (peoples.length + 1).toString(),
        ...newPeople,
      }),
    );
    setNewPeople(initialNewPeople);
  };

  const editNewPeopleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPeople({ ...newPeople, [event.target.id]: event.target.value });
  };

  const deleteSelectedPeople = async (_id: string) => {
    await deletePeople(_id);
    setPeoples(peoples.filter(people => people._id !== _id));
  };

  const editPeopleValue = (event: React.ChangeEvent<HTMLInputElement>, people: IPeople) => {
    const editedPeople = { ...peoples.find(p => p._id === people._id) };
    editedPeople[event.target.id] = event.target.value;

    const updatedPeopleIndex = peoples.findIndex(p => p._id === people._id);
    const updatedPeoples = [...peoples];

    updatedPeoples[updatedPeopleIndex] = editedPeople;
    setPeoples(updatedPeoples);
  };

  const editSelectedPeople = async (people: IPeople) => {
    await updatePeople(people);
  };

  return {
    peoples,
    setPeoples,
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
