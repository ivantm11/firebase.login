import { FC, useState } from 'react';
import { TextField } from '@fluentui/react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

import styles from './Register.module.scss';

const Register: FC = () => {
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');

  const updateUserMail = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue = ''
  ) => {
    event.preventDefault();
    setUserMail(newValue);
  };

  const updateUserPassword = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue = ''
  ) => {
    event.preventDefault();
    setUserPassword(newValue);
  };

  const updateUserConfirmPassword = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue = ''
  ) => {
    event.preventDefault();
    setUserConfirmPassword(newValue);
  };

  const someFieldIsEmpty = () =>
    userMail === '' || userPassword === '' || userConfirmPassword === '';

  const passwordsAreNotTheSame = () => userPassword !== userConfirmPassword;

  const confirmIsDisabled = () =>
    someFieldIsEmpty() || passwordsAreNotTheSame();

  const createClicked = () => console.info('Create');

  return (
    <div className={styles.Register}>
      <div className={styles.container}>
        <h2 className={styles.title}>{`Register`}</h2>
        <TextField
          label="Email"
          type="email"
          value={userMail}
          onChange={updateUserMail}
          required
        />
        <TextField
          label="Password"
          value={userPassword}
          onChange={updateUserPassword}
          type="password"
          canRevealPassword
          revealPasswordAriaLabel="Show password"
          required
        />
        <TextField
          label="Confirm password"
          value={userConfirmPassword}
          onChange={updateUserConfirmPassword}
          type="password"
          canRevealPassword
          revealPasswordAriaLabel="Show password"
          required
        />
        <PrimaryButton
          text="Create account"
          onClick={createClicked}
          disabled={confirmIsDisabled()}
          className={styles.Go}
        />
        <p className={styles.message}>
          {`Already have an account?`}
          <br />
          <a href="/login"> {`Log in here.`}</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
