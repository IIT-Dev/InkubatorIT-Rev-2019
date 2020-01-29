export const isAuthenticated = (): boolean => {
  if (localStorage.getItem('iit:authenticated') === 'true') {
    return true;
  }
  return false;
};
