import { questions } from '../data/request';

export const reducers = (state, action) => {
  if (action) {
    return { ...state, [action.id]: action.payload };
  }

  return state;
};

export const initialState = () => {
  const state = {};

  questions.forEach(question => {
    state[question.id] = undefined;
  });

  return state;
};
