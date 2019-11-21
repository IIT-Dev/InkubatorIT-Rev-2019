import React, { useState } from 'react';

import '../scss/admin/people.scss';

import { SEO } from '../../components/seo';
import { AdminLayout } from '../../components/layout';

import { usePeoples } from '../../hooks/usePeoples';

const PeopleManagement = () => {
  const {
    peoples,
    setNewPeople,
    newPeople,
    editNewPeopleValue,
    addNewPeople,
    editPeopleValue,
    editSelectedPeople,
    deleteSelectedPeople,
  } = usePeoples();

  const [imageUrl, setImageUrl] = useState();

  const actionSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const reader = new FileReader();

    if (!files) return;
    const file = files[0];

    reader.onloadend = () => {
      if (typeof reader.result !== 'string') return;
      setNewPeople({ ...newPeople, imageUrl: reader.result });
      setImageUrl(reader.result);
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
              <label htmlFor="image">
                <img src={require('../../images/upload-photo.png')} alt="Upload photo" />
              </label>
              <input
                type="file"
                name="image"
                id="image"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={actionSelectFile}
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
            <img src={imageUrl} alt={newPeople.name} />
          </div>
          <div className="upload-img">
            <label htmlFor="image">
              <img src={require('../../images/upload-photo.png')} alt="Upload photo" />
            </label>
            <input
              type="file"
              name="image"
              id="image"
              style={{ display: 'none' }}
              accept="image/*"
              onChange={actionSelectFile}
            />
          </div>
          <div className="btn-group">
            <button
              className="btn btn-edit"
              onClick={() => {
                setImageUrl('');
                addNewPeople();
              }}
            >
              Tambah
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PeopleManagement;
