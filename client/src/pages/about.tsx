import React from 'react';

import './scss/about.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';

const visi = 'Terbentuknya komunitas IT sebagai wadah aktualisasi keprofesian massa HMIF';

const misi = [
  'Membentuk dan mengembangkan komunitas berbasis keilmuan informatika',
  'Menyalurkan dan mengembangkan potensi anggota Inkubator IT melalui pembelajaran dan aktualisasi diri',
  'Memotivasi minat anggota untuk berinovasi sebagai bentukpengembangan keilmuan informatika',
  'Mendukung keberjalanan HMIF dengan mendapatkan sumber dana dari pengerjaan proyek',
];

const AboutPage = () => {
  const whatIsIIT = () => (
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
        <p>{visi}</p>
      </div>
      <div className="mission">
        <h2>Misi</h2>
        <ul>
          {misi.map((m, index) => (
            <li key={index}>{m}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const management = (
    <div className="section">
      <h1>
        <span>Pengurus Inti</span>
      </h1>
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
          <p className="title">Kami bertempat di:</p>
          <p>
            Sekretariat HMIF Gedung Benny Subianto(Labtek V), Institut Teknologi Bandung, Jalan Ganesha No. 10, 40132
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
        {management}
        {contact}
      </section>
    </Layout>
  );
};

export default AboutPage;
