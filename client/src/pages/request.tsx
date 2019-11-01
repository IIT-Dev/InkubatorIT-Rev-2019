import React from 'react';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

import './scss/request.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { notices, questions } from '../data/request';

const Request = () => {
  const InputField = props => {
    const { label, id, type, options, focus } = props;

    const getField = () => {
      switch (type) {
        case 'text':
          return (
            <input
              type="text"
              id={id}
              name={id}
              placeholder="Ketik jawaban disini..."
              autoFocus={focus}
              autoComplete="off"
            />
          );
        case 'textarea':
          return (
            <textarea
              id={id}
              name={id}
              placeholder="Ketik jawaban disini..."
              autoFocus={focus}
              rows={5}
              autoComplete="off"
            />
          );
        case 'date':
          return (
            <MaskedInput
              mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
              type="text"
              id={id}
              name={id}
              placeholder="dd/mm/yyyy"
              autoFocus={focus}
              autoComplete="off"
            />
          );
        case 'email':
          return (
            <MaskedInput
              mask={emailMask}
              type="text"
              id={id}
              name={id}
              placeholder="example@gmail.com"
              autoFocus={focus}
              autoComplete="off"
            />
          );
        case 'radio': {
          return (
            <div className={`options ${options.length > 2 && 'multiline'}`}>
              {options.map((option, index) => (
                <button key={index}>{option}</button>
              ))}
            </div>
          );
        }
      }
    };

    const getButton = () => {
      if (type === 'radio') return;

      return (
        <div>
          <button type="button">OK</button>
          <span>
            atau tekan <span className="enter">ENTER</span>
          </span>
        </div>
      );
    };

    return (
      <div className="question">
        <label htmlFor={id}>{label}</label>
        {getField()}
        {getButton()}
      </div>
    );
  };

  return (
    <Layout>
      <SEO title="Request a Project" />
      <form className="request" autoComplete="off" autoCorrect="off">
        <div className="title">
          <span>Formulir Pengajuan Proyek</span>
          {notices.map((notice, index) => (
            <h3 key={index}>{notice}</h3>
          ))}
        </div>
        {questions.map((question, index) => (
          <InputField key={index} {...question} focus={index === 0} />
        ))}
        <div className="submit-btn">
          <button>SUBMIT</button>
        </div>
      </form>
    </Layout>
  );
};

export default Request;
