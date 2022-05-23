import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Spinner, SpinnerSize, TextField } from '@fluentui/react';

import { MAIN_PATH } from 'routes/paths';
import { RegisterField } from 'common/model/inputs';
import { useAppDispatch, useAppSelector } from 'store';
import { createUserWithEmail } from 'store/app/actions';

import FloatingBox from 'common/components/FloatingBox';

import styles from './Register.module.scss';

const Register: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isUserLoggedIn = useAppSelector(state => state.app.user.loggedIn);
  const isLoadingRequest = useAppSelector(state => state.app.loadingRequest);

  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');

  useEffect(() => {
    if (isUserLoggedIn) navigate(MAIN_PATH);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoggedIn]);

  const updateUserInput = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputValue = ''
  ) => {
    event.preventDefault();
    const inputName =
      event.currentTarget.name.toUpperCase() as keyof typeof RegisterField;
    const inputField: RegisterField =
      RegisterField[inputName] || RegisterField.NONE;
    switch (inputField) {
      case RegisterField.EMAIL:
        setUserMail(inputValue);
        break;
      case RegisterField.PASSWORD:
        setUserPassword(inputValue);
        break;
      case RegisterField.CONFIRM_PASSWORD:
        setUserConfirmPassword(inputValue);
        break;
    }
  };

  const someFieldIsEmpty = () =>
    userMail === '' || userPassword === '' || userConfirmPassword === '';

  const passwordsAreNotTheSame = () => userPassword !== userConfirmPassword;

  const confirmIsDisabled = () =>
    someFieldIsEmpty() || passwordsAreNotTheSame();

  const handleRegister = () =>
    dispatch(createUserWithEmail({ email: userMail, password: userPassword }));

  return (
    <FloatingBox className={styles.Register}>
      <h2 className={styles.title}>{`Register`}</h2>
      {isLoadingRequest ? (
        <Spinner size={SpinnerSize.large} label="Creating user" />
      ) : (
        <form className={styles.userData}>
          <TextField
            label="Email"
            type="email"
            name={RegisterField.EMAIL}
            value={userMail}
            onChange={updateUserInput}
            required
          />
          <TextField
            label="Password"
            value={userPassword}
            onChange={updateUserInput}
            type="password"
            name={RegisterField.PASSWORD}
            canRevealPassword
            revealPasswordAriaLabel="Show password"
            required
          />
          <TextField
            label="Confirm password"
            value={userConfirmPassword}
            onChange={updateUserInput}
            type="password"
            name={RegisterField.CONFIRM_PASSWORD}
            canRevealPassword
            revealPasswordAriaLabel="Show password"
            required
          />
        </form>
      )}
      <PrimaryButton
        text="Create account"
        onClick={handleRegister}
        disabled={confirmIsDisabled()}
        className={styles.btn}
      />
      <p className={styles.message}>
        {`Already have an account?`}
        <br />
        <a href="/login"> {`Log in here.`}</a>
      </p>
    </FloatingBox>
  );
};

export default Register;
