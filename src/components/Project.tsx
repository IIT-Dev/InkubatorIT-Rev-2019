import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faMobileAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import './scss/Project.scss';
import { IPortofolio } from '../interfaces/portofolio';
import { Alert } from './Alert';

interface IProjectProps extends IPortofolio {
  admin?: boolean;
  editPortofolio?: () => void;
  removePortofolio?: (id: string) => void;
}

export const Project: React.FC<IProjectProps> = props => {
  const { _id, title, platform, imageUrl, description, editPortofolio, removePortofolio, admin } = props;

  const actionOpenAlert = () => {
    Alert.fire({
      title,
      html: (
        <div className="project-modal">
          <p>{description}</p>
        </div>
      ),
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  const renderIcon = () => {
    switch (platform) {
      case 'web':
        return faChrome;
      case 'desktop':
        return faDesktop;
      case 'mobile':
        return faMobileAlt;
    }
  };

  const renderAdminButton = () => {
    if (!admin) return;

    return (
      <div className="buttons">
        <button
          className="btn edit-btn"
          onClick={event => {
            event.stopPropagation();
            editPortofolio();
          }}
        >
          <FontAwesomeIcon icon={faEdit} color="var(--secondary)" />
        </button>
        <button
          className="btn remove-btn"
          onClick={event => {
            event.stopPropagation();
            removePortofolio(_id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} color="var(--quartenary)" />
        </button>
      </div>
    );
  };

  return (
    <div className="project" onClick={actionOpenAlert}>
      <div className="image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title">
        <h3>{title}</h3>
        <div>
          <FontAwesomeIcon icon={renderIcon()} className="icon" />
        </div>
      </div>
      {renderAdminButton()}
    </div>
  );
};
