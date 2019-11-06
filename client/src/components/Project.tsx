import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faMobileAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './scss/Project.scss';

const Alert = withReactContent(Swal);

export const Project = props => {
  const { name, type, url, description, admin } = props;

  const actionOpenAlert = () => {
    Alert.fire({
      title: <p>{name}</p>,
      html: (
        <div className="project-modal">
          <p>{description}</p>
          <button>{type.toUpperCase()}</button>
          <div className="img">
            <img src={url} alt={name} />
          </div>
        </div>
      ),
      confirmButtonColor: 'var(--tertiary)',
    });
  };

  const renderIcon = type => {
    switch (type) {
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
        <button className="btn edit-btn">
          <FontAwesomeIcon icon={faEdit} color="var(--secondary)" />
        </button>
        <button className="btn remove-btn">
          <FontAwesomeIcon icon={faTrash} color="var(--quartenary)" />
        </button>
      </div>
    );
  };

  return (
    <div className="project" onClick={actionOpenAlert}>
      <div className="image">
        <img src={url} alt={name} />
      </div>
      <div className="title">
        <h3>{name}</h3>
        <div>
          <FontAwesomeIcon icon={renderIcon(type)} className="icon" />
        </div>
      </div>
      {renderAdminButton()}
    </div>
  );
};
