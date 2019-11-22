import React, { useState } from 'react';
import { navigate } from 'gatsby';

import './scss/login.scss';

import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { api } from '../api';

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const actionUpdateLoginField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };

  const actionSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await api.post('/user/login', loginData);
      if (response) {
        localStorage.setItem('iit:authenticated', 'true');
        navigate('/admin');
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Layout>
      <SEO title="Login" />
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
