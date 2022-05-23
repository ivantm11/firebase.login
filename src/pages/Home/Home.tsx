import { FC } from 'react';
import { PrimaryButton } from '@fluentui/react';

import { userSignOut } from 'store/app/actions';
import { useAppDispatch, useAppSelector } from 'store';

import styles from './Home.module.scss';

const Start: FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.app.user);

  const handleSignOut = () => {
    dispatch(userSignOut());
  };

  return (
    <div className={styles.Home}>
      <code>Vi Fit</code>
      {user.loggedIn ? (
        <>
          <code>{`Welcome ${user.name}`}</code>
          <code>{`${user.email}`}</code>
          <PrimaryButton text="Sign Out" onClick={handleSignOut} />
        </>
      ) : (
        <>
          <code>Soon...</code>
          <a href="/register">
            <PrimaryButton text="Register" />
          </a>
        </>
      )}
    </div>
  );
};

export default Start;
