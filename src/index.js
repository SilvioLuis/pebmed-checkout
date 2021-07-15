import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';
import theme from './styles/theme.json';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
