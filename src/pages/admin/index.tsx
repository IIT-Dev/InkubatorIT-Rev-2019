import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { isAuthenticated } from '../../helpers/auth';

export default () => {
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
      return;
    }

    navigate('/admin/portofolio');
  }, []);
  return null;
};
