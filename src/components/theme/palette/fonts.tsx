import React from 'react';
import { Helmet } from 'react-helmet';

const Fonts = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={'true'}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default Fonts;
