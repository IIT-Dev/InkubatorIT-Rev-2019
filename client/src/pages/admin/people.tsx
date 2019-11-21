import React from 'react';

import '../scss/admin/people.scss';

import { SEO } from '../../components/seo';
import { AdminLayout } from '../../components/layout';

import { usePeoples } from '../../hooks/usePeoples';
import { IPeople } from '../../interfaces/people';

const PeopleManagement = () => {
  const {
    peoples,
    setPeoples,
    setNewPeople,
    newPeople,
    editNewPeopleValue,
    addNewPeople,
    editPeopleValue,
    editSelectedPeople,
    deleteSelectedPeople,
  } = usePeoples();

  const actionSelectPeopleImage = (event: React.ChangeEvent<HTMLInputElement>, people: IPeople) => {
    const { files } = event.target;
    const reader = new FileReader();

    if (!files) return;
    const file = files[0];

    reader.onloadend = () => {
      if (typeof reader.result !== 'string') return;
      const editedPeople = { ...peoples.find(p => p._id === people._id) };
      editedPeople.imageUrl = reader.result;

      const updatedPeopleIndex = peoples.findIndex(p => p._id === people._id);
      const updatedPeoples = [...peoples];

      updatedPeoples[updatedPeopleIndex] = editedPeople;
      setPeoples(updatedPeoples);
    };

    reader.readAsDataURL(file);
  };

  const actionSelectNewPeopleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const reader = new FileReader();

    if (!files) return;
    const file = files[0];

    reader.onloadend = () => {
      if (typeof reader.result !== 'string') return;
      setNewPeople({ ...newPeople, imageUrl: reader.result });
    };

    reader.readAsDataURL(file);
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
            <div className="upload-img">
              <label htmlFor={`image-${people._id}`}>
                <img src={require('../../images/upload-photo.png')} alt="Upload photo" />
              </label>
              <input
                type="file"
                name="image"
                id={`image-${people._id}`}
                accept="image/*"
                onChange={event => actionSelectPeopleImage(event, people)}
              />
            </div>
            <div className="btn-group">
              <button className="btn btn-edit" onClick={() => editSelectedPeople(people)}>
                Sunting
              </button>
              <button className="btn btn-remove" onClick={() => deleteSelectedPeople(people._id)}>
                Hapus
              </button>
            </div>
          </div>
        ))}
        <div className="people">
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
          <div className="upload-img">
            <label htmlFor="new-people-image">
              <img src={require('../../images/upload-photo.png')} alt="Upload photo" />
            </label>
            <input
              type="file"
              name="image"
              id="new-people-image"
              accept="image/*"
              onChange={actionSelectNewPeopleImage}
            />
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
