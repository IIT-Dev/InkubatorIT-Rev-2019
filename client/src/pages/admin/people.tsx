import React from 'react';

import '../scss/admin/people.scss';

import { SEO } from '../../components/seo';
import { AdminLayout } from '../../components/layout';

import { usePeoples } from '../../hooks/usePeoples';

const PeopleManagement = () => {
  const {
    peoples,
    newPeople,
    editNewPeopleValue,
    addNewPeople,
    editPeopleValue,
    editSelectedPeople,
    deleteSelectedPeople,
  } = usePeoples();

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
              onChange={event => editPeopleValue(event, people)}
            />
            <input
              type="text"
              id="role"
              className="people-position"
              placeholder="Jabatan"
              value={people.role}
              onChange={event => editPeopleValue(event, people)}
            />
            <div className="img">
              <img src={people.imageUrl} alt={people.name} />
            </div>
            <div className="btn-group">
              <button className="btn btn-edit" onClick={() => editSelectedPeople(people)}>
                Sunting
              </button>
              <button className="btn btn-remove" onClick={() => deleteSelectedPeople(people)}>
                Hapus
              </button>
            </div>
          </div>
        ))}
        <div className="people" key={newPeople._id}>
          <input
            type="text"
            id="name"
            className="people-name"
            placeholder="Nama"
            value={newPeople.name}
            onChange={editNewPeopleValue}
          />
          <input
            type="text"
            id="role"
            className="people-position"
            placeholder="Jabatan"
            value={newPeople.role}
            onChange={editNewPeopleValue}
          />
          <div className="img">
            <img src={newPeople.imageUrl} alt={newPeople.name} />
          </div>
          <div className="btn-group">
            <button className="btn btn-edit" onClick={() => addNewPeople()}>
              Tambah
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PeopleManagement;
