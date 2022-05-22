import { FC } from 'react';

import { useAppSelector } from 'store';

import styles from './Home.module.scss';

const Start: FC = () => {
  const user = useAppSelector(state => state.app.user);

  return (
    <div className={styles.Home}>
      <code>Vi Fit</code>
      {user.loggedIn ? (
        <>
          <code>{`Welcome ${user.name}`}</code>
          <code>{`${user.email}`}</code>
        </>
      ) : (
        <code>Soon...</code>
      )}
    </div>
  );
};

export default Start;
