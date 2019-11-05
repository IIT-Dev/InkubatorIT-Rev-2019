/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import { VisitorNavbar, AdminNavbar } from './Navbar';
import { Footer } from './Footer';

import './scss/layout.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <VisitorNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      <main className="admin">{children}</main>
      <Footer />
    </>
  );
};
