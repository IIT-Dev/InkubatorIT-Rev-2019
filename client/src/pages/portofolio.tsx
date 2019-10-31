import React from 'react';

import './scss/portofolio.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const dummyProjects = [
  { name: 'Aplikasi Web', url: 'https://via.placeholder.com/750/150', type: 'web' },
  { name: 'Aplikasi Mobile', url: 'https://via.placeholder.com/750/150', type: 'mobile' },
  { name: 'Aplikasi Desktop', url: 'https://via.placeholder.com/750/150', type: 'desktop' },
];

const Portfolio = () => {
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

  return (
    <Layout>
      <SEO title="Portofolio" />
      <section className="portofolio">
        <h1 className="section">
          <span>Hasil Karya Kami</span>
        </h1>
        <div className="section projects">
          {dummyProjects.map(project => (
            <div className="project">
              <div className="title">
                <h3>{project.name}</h3>
                <div>
                  <FontAwesomeIcon icon={renderIcon(project.type)} size="2x" className="icon" />
                </div>
              </div>
              <div className="image">
                <img src={project.url} alt={project.name} />
              </div>
            </div>
          ))}
        </div>
        <div className="section">
          <h2>Ingin ide kamu direalisasikan juga?</h2>
          <button>Request Disini</button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
