import React from 'react';

import './scss/login.scss';

import SEO from '../components/seo';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
      <SEO title="Login" />
      <section className="login">
        <form>
          <div className="field">
            <input type="text" placeholder="username" autoFocus />
          </div>
          <div className="field">
            <input type="text" placeholder="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Login;
