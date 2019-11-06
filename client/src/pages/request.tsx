import React from 'react';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Element, scroller } from 'react-scroll';

import './scss/request.scss';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

import { notices, questions } from '../data/request';

import { useRequestReducer } from '../reducers/request';
import { isMobile, isQuestionConditionNotFulfilled } from '../helpers/request';

const Alert = withReactContent(Swal);

const InputField = props => {
  const { label, id, type, options, condition, hasCustomInput, isRequired, reducer } = props;
  const [state, dispatch] = reducer;

  const actionTextInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: id, payload: event.target.value });
  };

  const actionScrollToNextInput = () => {
    const filteredQuestions = questions.filter(question => {
      if (isQuestionConditionNotFulfilled(question.condition, state)) return false;
      return true;
    });

    const currentQuestionIndex = filteredQuestions.findIndex(question => question.id === id);

    const nextQuestion = filteredQuestions[currentQuestionIndex + 1];
    let nextQuestionKey: string;
    let nextQuestionType: string;

    // It has reached last question
    if (!nextQuestion) {
      nextQuestionKey = 'submit-btn';
      nextQuestionType = 'button';
    } else {
      nextQuestionKey = nextQuestion.id;
      nextQuestionType = nextQuestion.type;
    }

    const nextQuestionElement = document.getElementById(nextQuestionKey);

    scroller.scrollTo(nextQuestionKey, {
      duration: 1000,
      smooth: true,
      offset: Math.max(
        -(window.innerHeight * 0.5 - nextQuestionElement.clientHeight * 0.5),
        -(window.innerHeight * 0.25),
      ),
    });

    if (
      (nextQuestionElement instanceof HTMLInputElement ||
        nextQuestionElement instanceof HTMLTextAreaElement ||
        nextQuestionElement.id === 'submit-btn') &&
      (nextQuestionType !== 'radio' && nextQuestionType !== 'checkbox') &&
      !isMobile()
    ) {
      nextQuestionElement.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.currentTarget.blur();
      actionScrollToNextInput();
    }
  };

  const renderField = () => {
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
            spellCheck={false}
            onChange={event => actionTextInputChange(event)}
            onKeyDown={handleKeyDown}
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
            spellCheck={false}
            value={state.id}
            onChange={event => actionTextInputChange(event)}
            onKeyDown={handleKeyDown}
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
            spellCheck={false}
            value={state.id}
            onChange={event => actionTextInputChange(event)}
            onKeyDown={handleKeyDown}
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
            spellCheck={false}
            value={state.id}
            onChange={event => actionTextInputChange(event)}
            onKeyDown={handleKeyDown}
          />
        );
      case 'radio': {
        const actionRadioClicked = option => {
          dispatch({ type: id, payload: option });
          actionScrollToNextInput();
        };

        return (
          <div className={`options ${options.length > 2 && 'multiline'}`} id={id}>
            {options.map((option, index) => (
              <button
                type="button"
                key={index}
                onClick={() => actionRadioClicked(option)}
                className={`option ${state[id] === option ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
            {hasCustomInput && (
              <input
                type="text"
                className="custom-input"
                name={id}
                placeholder="Jawaban lain..."
                autoComplete="off"
                spellCheck={false}
                value={options.includes(state[id]) ? '' : state[id]}
                onChange={event => actionTextInputChange(event)}
                onKeyDown={handleKeyDown}
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
          if (state[id] && state[id].includes(value.slice(0, value.length - 1))) {
            const newState = state[id].filter(s => s !== value.slice(0, value.length - 1));

            dispatch({ type: id, payload: [...newState, value] });
          } else {
            if (!state[id]) dispatch({ type: id, payload: [value] });
            else dispatch({ type: id, payload: [...state[id], value] });
          }
        };

        return (
          <div className={`options ${options.length > 2 && 'multiline'}`} id={id}>
            {options.map((option, index) => (
              <button
                type="button"
                key={index}
                onClick={() => checkboxClicked(option)}
                className={`option ${state[id] && state[id].includes(option) ? 'selected' : ''}`}
                onKeyDown={handleKeyDown}
              >
                {option}
              </button>
            ))}
            {hasCustomInput && (
              <input
                type="text"
                className="custom-input"
                name={id}
                placeholder="Jawaban lain..."
                autoComplete="off"
                spellCheck={false}
                onChange={event => checkboxCustomInput(event.target.value)}
                onKeyDown={handleKeyDown}
              />
            )}
          </div>
        );
      }
    }
  };

  const renderButton = () => {
    if (type === 'radio' && hasCustomInput !== true) return;

    return (
      <div className={`input-btn ${!state[id] ? 'hide' : ''}`}>
        <button type="button" onClick={actionScrollToNextInput}>
          OK
        </button>
        <span>
          atau tekan <span className="enter">ENTER</span>
        </span>
      </div>
    );
  };

  const renderIsRequiredStar = () => {
    return isRequired ? <span className="required-star">*</span> : '';
  };

  if (isQuestionConditionNotFulfilled(condition, state)) return <></>;

  return (
    <Element name={id}>
      <div className="question">
        <label htmlFor={id}>
          {label} {renderIsRequiredStar()}
        </label>
        {renderField()}
        {renderButton()}
      </div>
    </Element>
  );
};

const Request = () => {
  const requestReducer = useRequestReducer();

  const actionSubmitForm = () => {
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
      <div className="request">
        <div className="title">
          <span>Formulir Pengajuan Proyek</span>
          {notices.map((notice, index) => (
            <h3 key={index}>{notice}</h3>
          ))}
        </div>
        {questions.map((question, index) => (
          <InputField key={index} {...question} reducer={requestReducer} />
        ))}
        <Element name="submit-btn">
          <div className="submit-btn">
            <button id="submit-btn" onClick={actionSubmitForm}>
              SUBMIT
            </button>
          </div>
        </Element>
      </div>
    </Layout>
  );
};

export default Request;
