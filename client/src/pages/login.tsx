import React from 'react';

import './scss/login.scss';

import { SEO } from '../components/seo';
import { Layout } from '../components/layout';

const Login = () => {
  return (
    <Layout>
      <SEO title="Login" />
      <section className="login">
        <form>
          <h4>Login</h4>
          <div className="field">
            <input type="text" placeholder="username" autoFocus />
          </div>
          <div className="field">
            <input type="password" placeholder="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </Layout>
  );
};

export default Login;
