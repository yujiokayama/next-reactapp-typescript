import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

const store = setupStore();

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
