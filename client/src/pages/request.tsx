import React from 'react';

import './scss/request.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';

const questions = [
  {
    label: 'Siapa nama Anda?',
    id: 'name',
  },
  {
    label: 'Dari instansi mana Anda berasal?',
    id: 'instance',
  },
  {
    label: 'Apa jurusan Anda?',
    id: 'major',
  },
  {
    label: 'Anda angkatan berapa?',
    id: 'classOf',
  },
  {
    label: 'Apa nomor WhatsApp Anda?',
    id: 'whatsapp',
  },
  {
    label: 'Apa ID Line Anda?',
    id: 'line',
  },
  {
    label: 'Berapa ekspektasi biaya Anda untuk proyek ini?',
    id: 'expectation',
  },
];

const Request = () => {
  const InputField = props => {
    const { label, id } = props;

    return (
      <div className="question">
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} placeholder="Ketik jawaban disini..." autoFocus />
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
