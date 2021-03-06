import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { Separator, Spinner, SpinnerSize, TextField } from '@fluentui/react';

import { MAIN_PATH } from 'routes/paths';
import { LogInField } from 'common/model/inputs';
import { useAppDispatch, useAppSelector } from 'store';
import { logInUserWithEmail, sendResetPasswordEmail } from 'store/app/actions';

import FloatingBox from 'common/components/FloatingBox';
import GoogleSignIn from 'common/components/GoogleSignIn';

import styles from './Login.module.scss';

const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isUserLoggedIn = useAppSelector(state => state.app.user.loggedIn);
  const isLoadingRequest = useAppSelector(state => state.app.loadingRequest);

  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    return () => resetUserFields();
  }, []);

  useEffect(() => {
    if (isUserLoggedIn) navigate(MAIN_PATH);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoggedIn]);

  const resetUserFields = () => {
    setUserMail('');
    setUserPassword('');
  };

  const updateUserInput = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputValue = ''
  ) => {
    event.preventDefault();
    const inputName =
      event.currentTarget.name.toUpperCase() as keyof typeof LogInField;
    const inputField: LogInField = LogInField[inputName] || LogInField.NONE;
    switch (inputField) {
      case LogInField.EMAIL:
        setUserMail(inputValue);
        break;
      case LogInField.PASSWORD:
        setUserPassword(inputValue);
        break;
    }
  };

  const emailFieldIsEmpty = () => userMail === '';

  const someFieldIsEmpty = () => userMail === '' || userPassword === '';

  const handleLogIn = () => {
    dispatch(logInUserWithEmail({ email: userMail, password: userPassword }));
    resetUserFields();
  };

  const handleForgotPassword = () => {
    dispatch(sendResetPasswordEmail(userMail));
    resetUserFields();
  };

  const renderLoginForm = () => (
    <>
      <form className={styles.userData}>
        <TextField
          label="Email"
          type="email"
          name={LogInField.EMAIL}
          value={userMail}
          onChange={updateUserInput}
          required
        />
        <TextField
          label="Password"
          value={userPassword}
          onChange={updateUserInput}
          type="password"
          name={LogInField.PASSWORD}
          canRevealPassword
          revealPasswordAriaLabel="Show password"
          required
        />
      </form>
      <PrimaryButton
        text="Log In"
        onClick={handleLogIn}
        disabled={someFieldIsEmpty()}
        className={styles.btn}
      />
      <DefaultButton
        text="Forgot password?"
        onClick={handleForgotPassword}
        disabled={emailFieldIsEmpty()}
        className={styles.btn}
      />
    </>
  );

  return (
    <FloatingBox className={styles.Login}>
      <h2 className={styles.title}>{`Log In`}</h2>
      {isLoadingRequest ? (
        <Spinner size={SpinnerSize.large} label="Log In" />
      ) : (
        renderLoginForm()
      )}
      <Separator />
      <p className={styles.message}>
        {`If you don't have an account,`}
        <br />
        <a href="/register">{`you can create one here.`}</a>
        <br />
        {`or`}
      </p>
      <GoogleSignIn />
    </FloatingBox>
  );
};

export default Login;
