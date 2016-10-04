import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./app/App.js', () => {
    const NextApp = require('./app/App.js').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootElement
    );
  });
}
