import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faMobileAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import './scss/Project.scss';

const Project = props => {
  const { name, type, url, admin } = props;

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

  const renderEditButton = () => {
    if (!admin) return;

    return (
      <button className="edit-btn">
        <FontAwesomeIcon icon={faEdit} />
      </button>
    );
  };

  return (
    <div className="project">
      <div className="title">
        <h3>{name}</h3>
        <div>
          <FontAwesomeIcon icon={renderIcon(type)} size="2x" className="icon" />
        </div>
      </div>
      <div className="image">
        <img src={url} alt={name} />
      </div>
      {renderEditButton()}
    </div>
  );
};

export default Project;
