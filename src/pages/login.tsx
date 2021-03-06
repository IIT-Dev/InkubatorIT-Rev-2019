import React, { useState } from 'react';
import { navigate } from 'gatsby';

import './scss/login.scss';

import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { api } from '../api';
import Spinner from '../components/Spinner';

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const actionUpdateLoginField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };

  const actionSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    try {
      const response = await api.post('/user/login', loginData);
      if (response) {
        localStorage.setItem('iit:authenticated', 'true');
        setLoading(false);
        navigate('/admin');
      }
    } catch (e) {
      setLoading(false);
      alert(e);
    }
  };

  return (
    <Layout>
      <SEO title="Login" />
      {loading && <Spinner />}
      <section className="login">
        <form onSubmit={actionSubmitLogin}>
          <h4>Login</h4>
          <div className="field">
            <input
              type="text"
              id="username"
              placeholder="username"
              autoFocus
              value={loginData.username}
              onChange={actionUpdateLoginField}
            />
          </div>
          <div className="field">
            <input
              type="password"
              id="password"
              placeholder="password"
              value={loginData.password}
              onChange={actionUpdateLoginField}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </Layout>
  );
};

export default Login;
