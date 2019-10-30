import React from 'react';

import './scss/about.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <section className="about">
        <div className="what">
          <h1>
            <span>Apa itu Inkubator IT?</span>
          </h1>
        </div>
        <div className="what">
          <h1>
            <span>Visi dan Misi</span>
          </h1>
        </div>
        <div className="what">
          <h1>
            <span>Pengurus Inti</span>
          </h1>
        </div>
        <div className="what">
          <h1>
            <span>Hubungi Kami</span>
          </h1>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
