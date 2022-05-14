import React from 'react';

import AppRouter from 'routes';

import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <AppRouter />
    </div>
  );
};

export default App;
