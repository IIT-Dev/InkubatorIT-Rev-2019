import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import './scss/Client.scss';
import { IClient } from '../interfaces/client';
import { Alert } from './Alert';

interface IProjectProps extends IClient {
  admin?: boolean;
  editClient?: () => void;
  removeClient?: (id: string) => void;
}

export const Client: React.FC<IProjectProps> = props => {
  const { _id, name, imageUrl, editClient, removeClient, admin } = props;

  const actionOpenAlert = () => {
    Alert.fire({
      title: <p>{name}</p>,
      html: (
        <div className="client-modal">
          <div className="img">
            <img src={imageUrl} alt={name} />
          </div>
        </div>
      ),
      confirmButtonColor: 'var(--tertiary)',
    });
  };

  const renderAdminButton = () => {
    if (!admin) return;

    return (
      <div className="buttons">
        <button
          className="btn edit-btn"
          onClick={event => {
            event.stopPropagation();
            editClient();
          }}
        >
          <FontAwesomeIcon icon={faEdit} color="var(--secondary)" />
        </button>
        <button
          className="btn remove-btn"
          onClick={event => {
            event.stopPropagation();
            removeClient(_id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} color="var(--quartenary)" />
        </button>
      </div>
    );
  };

  return (
    <div className="client" onClick={actionOpenAlert}>
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="title">
        <h3>{name}</h3>
      </div>
      {renderAdminButton()}
    </div>
  );
};
