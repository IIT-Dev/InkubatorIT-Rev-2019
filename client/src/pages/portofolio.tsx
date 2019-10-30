import React from 'react';

import './scss/portofolio.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Portofolio" />
      <section className="portofolio">
        <h1>
          <span>Hasil Karya Kami</span>
        </h1>
      </section>
    </Layout>
  );
};

export default Portfolio;
