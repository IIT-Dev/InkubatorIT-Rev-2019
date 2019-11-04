import React from 'react';
import { Link } from 'gatsby';

import './scss/portofolio.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/Project';

const dummyProjects = [
  {
    name: 'Aplikasi Web',
    url: 'https://via.placeholder.com/750x500',
    type: 'web',
    description: 'Aplikasi ini dapat dijalankan di web',
  },
  {
    name: 'Aplikasi Mobile',
    url: 'https://via.placeholder.com/750x500',
    type: 'mobile',
    description: 'Aplikasi ini dapat dijalankan di mobile',
  },
  {
    name: 'Aplikasi Desktop',
    url: 'https://via.placeholder.com/750x500',
    type: 'desktop',
    description: 'Aplikasi ini dapat dijalankan di desktop',
  },
];

const Portfolio = () => {
  const title = (
    <h1 className="section">
      <span>Hasil Karya Kami</span>
    </h1>
  );

  const projects = () => {
    return (
      <div className="section projects">
        {dummyProjects.map((project, index) => (
          <Project {...project} key={index} />
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
