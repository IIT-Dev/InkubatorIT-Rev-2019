import React from 'react';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './scss/request.scss';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { notices, questions } from '../data/request';

import { useRequestReducer } from '../reducers/request';

const Alert = withReactContent(Swal);

const InputField = props => {
  const { label, id, type, options, condition, hasCustomInput, reducer } = props;
  const [state, dispatch] = reducer;

  const actionTextInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => {
    dispatch({ type: id, payload: event.target.value });
  };

  const getField = () => {
    switch (type) {
      case 'text':
        return (
          <input
            type="text"
            id={id}
            name={id}
            placeholder="Ketik jawaban disini..."
            autoComplete="off"
            value={state.id}
            onChange={event => actionTextInputChange(event, id)}
          />
        );
      case 'textarea':
        return (
          <textarea
            id={id}
            name={id}
            placeholder="Ketik jawaban disini..."
            rows={5}
            autoComplete="off"
            value={state.id}
            onChange={event => actionTextInputChange(event, id)}
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
            autoComplete="off"
            value={state.id}
            onChange={event => actionTextInputChange(event, id)}
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
            autoComplete="off"
            value={state.id}
            onChange={event => actionTextInputChange(event, id)}
          />
        );
      case 'radio': {
        return (
          <div className={`options ${options.length > 2 && 'multiline'}`}>
            {options.map((option, index) => (
              <button
                type="button"
                key={index}
                onClick={() => dispatch({ type: id, payload: option })}
                className={`option ${state[id] === option ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
            {hasCustomInput && (
              <input
                type="text"
                className="custom-input"
                id={id}
                name={id}
                placeholder="Jawaban lain..."
                autoComplete="off"
                value={options.includes(state[id]) ? '' : state[id]}
                onChange={event => actionTextInputChange(event, id)}
              />
            )}
          </div>
        );
      }
      case 'checkbox': {
        const checkboxClicked = option => {
          let newState;

          if (state[id] && state[id].includes(option)) {
            newState = state[id].filter(s => s !== option);
          } else {
            if (!state[id]) newState = [option];
            else newState = [...state[id], option];
          }

          dispatch({ type: id, payload: newState });
        };

        const checkboxCustomInput = value => {
          console.log({ state, value });

          if (state[id] && state[id].includes(value.slice(0, value.length - 1))) {
            const newState = state[id].filter(s => s !== value.slice(0, value.length - 1));

            dispatch({ type: id, payload: [...newState, value] });
          } else {
            if (!state[id]) dispatch({ type: id, payload: [value] });
            else dispatch({ type: id, payload: [...state[id], value] });
          }
        };

        return (
          <div className={`options ${options.length > 2 && 'multiline'}`}>
            {options.map((option, index) => (
              <button
                type="button"
                key={index}
                onClick={() => checkboxClicked(option)}
                className={`option ${state[id] && state[id].includes(option) ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
            {hasCustomInput && (
              <input
                type="text"
                className="custom-input"
                id={id}
                name={id}
                placeholder="Jawaban lain..."
                autoComplete="off"
                onChange={event => checkboxCustomInput(event.target.value)}
              />
            )}
          </div>
        );
      }
    }
  };

  const getButton = () => {
    if (type === 'radio' && hasCustomInput !== true) return;

    return (
      <div>
        <button type="button">OK</button>
        <span>
          atau tekan <span className="enter">ENTER</span>
        </span>
      </div>
    );
  };

  if (condition && !Object.entries(condition).every(cond => state[cond[0]] === cond[1])) return <></>;

  return (
    <div className="question">
      <label htmlFor={id}>{label}</label>
      {getField()}
      {getButton()}
    </div>
  );
};

const Request = () => {
  const requestReducer = useRequestReducer();

  const actionSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      Alert.fire({
        type: 'success',
        title: 'Sip!',
        text: `Proyek berhasil disubmit`,
        footer: 'Tunggu kabar selanjutnya dari kami ya!',
      });
    } else {
      Alert.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Terjadi kesalahan!',
      });
    }
  };

  return (
    <Layout>
      <SEO title="Request a Project" />
      <form className="request" autoComplete="off" autoCorrect="off" onSubmit={actionSubmitForm}>
        <div className="title">
          <span>Formulir Pengajuan Proyek</span>
          {notices.map((notice, index) => (
            <h3 key={index}>{notice}</h3>
          ))}
        </div>
        {questions.map((question, index) => (
          <InputField key={index} {...question} reducer={requestReducer} />
        ))}
        <div className="submit-btn">
          <button>SUBMIT</button>
        </div>
      </form>
    </Layout>
  );
};

export default Request;
