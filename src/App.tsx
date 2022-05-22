import React from 'react';
import { ReactNotifications } from 'react-notifications-component';

import AppRouter from 'routes';

import styles from './App.module.scss';
import 'react-notifications-component/dist/theme.css';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <ReactNotifications />
      <AppRouter />
    </div>
  );
};

export default App;
