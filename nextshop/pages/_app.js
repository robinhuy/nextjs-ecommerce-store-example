import React from 'react';
import App from 'next/app';
import Firebase from 'components/Firebase';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Firebase>
        <Component {...pageProps} />
      </Firebase>
    );
  }
}

export default MyApp;
