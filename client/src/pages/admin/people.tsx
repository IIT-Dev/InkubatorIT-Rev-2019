import React, { useState, useEffect } from 'react';

import '../scss/admin/people.scss';

import { SEO } from '../../components/seo';
import { AdminLayout } from '../../components/layout';

import { fetchPeoples, deletePeople, editPeople } from '../../api';

const PeopleManagement = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    fetchPeoples(setPeoples);
  }, []);

  const actionDeletePeople = people => {
    setPeoples(peoples.filter(p => p._id !== people._id));
    deletePeople(people);
  };

  const actionEditPeople = people => {
    editPeople(people);
  };

  const actionEditField = (event: React.ChangeEvent<HTMLInputElement>, people) => {
    const editedPeople = { ...peoples.find(p => p._id === people._id) };
    editedPeople[event.target.id] = event.target.value;

    const updatedPeopleIndex = peoples.findIndex(p => p._id === people._id);
    const updatedPeoples = [...peoples];

    updatedPeoples[updatedPeopleIndex] = editedPeople;
    setPeoples(updatedPeoples);
  };

  return (
    <AdminLayout>
      <SEO title="Admin" />
      <div className="people-management">
        <h1>
          <span>Pengurus</span>
        </h1>
        {peoples.map(people => (
          <div className="people" key={people._id}>
            <input
              type="text"
              id="name"
              className="people-name"
              placeholder="Nama"
              value={people.name}
              onChange={event => actionEditField(event, people)}
            />
            <input
              type="text"
              id="role"
              className="people-position"
              placeholder="Jabatan"
              value={people.role}
              onChange={event => actionEditField(event, people)}
            />
            <div className="img">
              <img src={people.imageUrl} alt={people.name} />
            </div>
            <div className="btn-group">
              <button className="btn btn-edit" onClick={() => actionEditPeople(people)}>
                Sunting
              </button>
              <button className="btn btn-remove" onClick={() => actionDeletePeople(people)}>
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default PeopleManagement;
