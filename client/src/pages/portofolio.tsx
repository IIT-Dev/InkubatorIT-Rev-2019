import React from 'react';

import './scss/portofolio.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Portofolio" />
      <section className="portofolio">
        <h1 className="section">
          <span>Hasil Karya Kami</span>
        </h1>
        <div className="section">
          <h2>Ingin ide kamu direalisasikan juga?</h2>
          <button>Request Disini</button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
