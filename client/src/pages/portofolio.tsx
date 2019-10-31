import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import './scss/portofolio.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const dummyProjects = [
  { name: 'Aplikasi Web', url: 'https://via.placeholder.com/750x500', type: 'web' },
  { name: 'Aplikasi Mobile', url: 'https://via.placeholder.com/750x500', type: 'mobile' },
  { name: 'Aplikasi Desktop', url: 'https://via.placeholder.com/750x500', type: 'desktop' },
];

const Portfolio = () => {
  const title = (
    <h1 className="section">
      <span>Hasil Karya Kami</span>
    </h1>
  );

  const projects = () => {
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
      <div className="section projects">
        {dummyProjects.map((project, index) => (
          <div className="project" key={index}>
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
    );
  };

  const offer = (
    <div className="section offer">
      <h2>Ingin ide kamu direalisasikan juga?</h2>
      <Link to="/request">
        <button>Request Disini</button>
      </Link>
    </div>
  );

  return (
    <Layout>
      <SEO title="Portofolio" />
      <section className="portofolio">
        {title}
        {projects()}
        {offer}
      </section>
    </Layout>
  );
};

export default Portfolio;
