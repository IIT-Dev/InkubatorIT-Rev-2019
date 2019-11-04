import React from 'react';
import { Link } from 'gatsby';

import './scss/about.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { vision, misions } from '../data/about';

const AboutPage = () => {
  const whatIsIIT = (
    <div className="section">
      <h1>
        <span>Apa itu Inkubator IT?</span>
      </h1>
      <div className="desc">
        <p>
          Inkubator IT merupakan sebuah gerakan keprofesian yang diusung saat kepengurusan Lyco Adhi Purwoko sebagai
          ketua HMIF pada 2011/2012. Hal ini terbuka bagi seluruh massa HMIF dan dijalankan sesuai dengan keinginan
          massa HMIF. Dengan kata lain, Inkubator IT merupakan suatu bentuk keprofesian HMIF dimana mengedepankan
          keterlibatan anggota himpunan sebagai individu yang dapat berkembang dalam dunia keinformatikaan.
        </p>
      </div>
    </div>
  );

  const visionMission = (
    <div className="section">
      <h1>
        <span>Visi dan Misi</span>
      </h1>
      <div className="vision">
        <h2>Visi</h2>
        <p>{vision}</p>
      </div>
      <div className="mission">
        <h2>Misi</h2>
        <ul>
          {misions.map((mision, index) => (
            <li key={index}>{mision}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const people = (
    <div className="section">
      <h1>
        <span>Pengurus Inti</span>
      </h1>
      <div className="people">
        <h4>Wildan Dicky Alnatara</h4>
        <p>Ketua Divisi Marketing</p>
        <img src="https://via.placeholder.com/750x500" alt="Wildan Dicky Alnatara" />
      </div>
    </div>
  );

  const contact = (
    <div className="section">
      <h1>
        <span>Hubungi Kami</span>
      </h1>
      <div className="contact">
        <div>
          <p className="title">Email: </p>
          <p>admin@inkubatorit.com</p>
        </div>
        <div>
          <p className="title">Lokasi:</p>
          <p>
            Sekretariat HMIF Gedung Benny Subianto(Labtek V), Institut Teknologi Bandung, Jalan Ganesha No. 10, 40132
          </p>
        </div>
        <div>
          <p>
            Untuk permintaan pengerjaan proyek silakan isi di{' '}
            <Link to="/request" className="link">
              <span>laman ini</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <SEO title="About Us" />
      <section className="about">
        {whatIsIIT}
        {visionMission}
        {people}
        {contact}
      </section>
    </Layout>
  );
};

export default AboutPage;
