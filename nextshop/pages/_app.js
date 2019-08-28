import App from 'next/app';
import React from 'react';
import Firebase from 'components/Firebase';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Provider store={reduxStore}>
        <Firebase>
          <Component {...pageProps} />
        </Firebase>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp)
