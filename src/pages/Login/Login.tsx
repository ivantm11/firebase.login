import { FC, useState } from 'react';
import { TextField } from '@fluentui/react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

import styles from './Login.module.scss';

const Login: FC = () => {
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');

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

  const someFieldIsEmpty = () => userMail === '' || userPassword === '';

  const logInClicked = () => console.info('Log In');

  return (
    <div className={styles.Login}>
      <div className={styles.container}>
        <h2 className={styles.title}>{`Log In`}</h2>
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
        <PrimaryButton
          text="Log In"
          onClick={logInClicked}
          disabled={someFieldIsEmpty()}
          className={styles.Go}
        />
        <p className={styles.message}>
          {`If you don't have an account, `}
          <br />
          <a href="/register"> {`you can create one here.`}</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
