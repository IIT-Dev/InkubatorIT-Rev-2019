import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import './scss/about.scss';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

import { vision, misions } from '../data/about';
import { fetchPeoples } from '../api';
import { IPeople } from '../interfaces/people';

const AboutPage = () => {
  const [peoples, setPeoples] = useState<IPeople[]>([]);

  useEffect(() => {
    fetchPeoples(setPeoples);
  }, []);

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

  const people = () => {
    return (
      <div className="section">
        <h1>
          <span>Pengurus Inti</span>
        </h1>
        {peoples.map(people => (
          <div key={people._id} className="people">
            <h4>{people.name}</h4>
            <p>{people.role}</p>
            <img src={people.imageUrl} alt={people.name} />
          </div>
        ))}
      </div>
    );
  };

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
            Untuk mengajukan pengerjaan proyek silakan isi di{' '}
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
        {people()}
        {contact}
      </section>
    </Layout>
  );
};

export default AboutPage;
