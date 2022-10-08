import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const TemporaryPage = () => (
  <HelmetProvider>
    <div className="placeholder">
      <Helmet title="Project">
        <meta name="description" content="Temporary Page" />
      </Helmet>
      <h1 data-testid="heading">Will update it soon</h1>
      <p>Return <Link to="/">home</Link>.</p>
    </div>
  </HelmetProvider>
);

export default TemporaryPage;
