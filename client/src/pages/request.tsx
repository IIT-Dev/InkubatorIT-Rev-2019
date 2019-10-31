import React from 'react';

import './scss/request.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';

const questions = [
  {
    label: 'Siapa nama Anda?',
  },
  {
    label: 'Dari instansi mana Anda berasal?',
  },
  {
    label: 'Apa jurusan Anda?',
  },
  {
    label: 'Anda angkatan berapa?',
  },
  {
    label: 'Apa nomor WhatsApp Anda?',
  },
  {
    label: 'Apa ID Line Anda?',
  },
  {
    label: 'Berapa ekspektasi biaya Anda untuk proyek ini?',
  },
];

const Request = () => {
  const InputField = props => {
    const { label } = props;

    return (
      <div className="question">
        <label htmlFor="name">{label}</label>
        <input type="text" id="name" placeholder="Ketik jawaban disini..." autoFocus />
        <div>
          <button>OK</button>
          <span>
            atau tekan <span className="enter">ENTER</span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <SEO title="Request a Project" />
      <section className="request">
        <h1 className="title">
          <span>Formulir Pengajuan Proyek</span>
        </h1>
        {questions.map((question, index) => (
          <InputField key={index} {...question} />
        ))}
      </section>
    </Layout>
  );
};

export default Request;
