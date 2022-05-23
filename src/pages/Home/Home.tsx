import { FC } from 'react';
import { Link } from 'react-router-dom';
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

  const renderUserLogged = () => (
    <>
      <code>{`Welcome ${user.name}`}</code>
      <code>{`${user.email}`}</code>
      <PrimaryButton text="Sign Out" onClick={handleSignOut} />
    </>
  );

  const renderDefault = () => (
    <>
      <code>Soon...</code>
      <Link to="/register">
        <PrimaryButton text="Register" />
      </Link>
      <Link to="/login">
        <PrimaryButton text="Log In" />
      </Link>
    </>
  );

  return (
    <div className={styles.Home}>
      <code>Vi Fit</code>
      {user.loggedIn ? renderUserLogged() : renderDefault()}
    </div>
  );
};

export default Start;
