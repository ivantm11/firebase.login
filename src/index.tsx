import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { initializeIcons } from '@fluentui/react/lib/Icons';

import appStore from 'store';

import './index.css';
import App from './App';

initializeIcons();

const root = ReactDOM.createRoot(
  document.getElementById('vifit') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
