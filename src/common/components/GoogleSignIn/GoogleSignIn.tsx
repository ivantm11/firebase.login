import { FC } from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';

import { useAppDispatch, useAppSelector } from 'store';
import { logInUserWithGoogle } from 'store/app/actions';

import styles from './GoogleSignIn.module.scss';

const GoogleSignIn: FC = () => {
  const dispatch = useAppDispatch();
  const isLoadingRequest = useAppSelector(state => state.app.loadingRequest);

  const handleGoogleLogIn = () => dispatch(logInUserWithGoogle());

  const renderLogo = () => <div className={styles.logo} />;

  const renderEnter = () => (
    <>
      {'Enter with Google'}
      {renderLogo()}
    </>
  );

  return (
    <DefaultButton
      onClick={handleGoogleLogIn}
      className={styles.GoogleSignIn}
      disabled={isLoadingRequest}
    >
      {isLoadingRequest ? 'Loading...' : renderEnter()}
    </DefaultButton>
  );
};

export default GoogleSignIn;
