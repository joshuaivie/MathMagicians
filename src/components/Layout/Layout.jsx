import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import '../../styles/layout.scss';

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Math Magicians</title>
        <meta
          name="description"
          content="The Math Magicians Application is a front end application build using the React Library."
        />
      </Helmet>
      <Router>
        <Header />
        <div className="layout-1">{children}</div>
      </Router>
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
