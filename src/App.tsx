import React, { useEffect } from 'react';
import { ReactNotifications } from 'react-notifications-component';

import AppRouter from 'routes';

import styles from './App.module.scss';
import 'react-notifications-component/dist/theme.css';
import { onAuthStateChanged } from 'firebase/auth';
import { MyAuth } from 'api/services/firebase';
import { useAppDispatch } from 'store';
import { resetUser, updateCurrentLocalUser } from 'store/app/actions';
import { cleanUserData } from 'utils/userData';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribeAuthChange = onAuthStateChanged(MyAuth, currentUser => {
      console.info(currentUser);
      if (!currentUser) {
        dispatch(resetUser());
        return;
      }

      const userData = cleanUserData(currentUser);
      dispatch(updateCurrentLocalUser(userData));
    });

    return () => unsubscribeAuthChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.App}>
      <ReactNotifications />
      <AppRouter />
    </div>
  );
};

export default App;
