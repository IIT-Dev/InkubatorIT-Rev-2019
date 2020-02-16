import { navigate } from 'gatsby';

export const isAuthenticated = (): boolean => {
  if (localStorage.getItem('iit:authenticated') === 'true') {
    return true;
  }
  return false;
};

export const logOut = () => {
  localStorage.removeItem('iit:authenticated');
  navigate('/');
};
