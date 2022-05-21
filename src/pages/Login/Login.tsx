import { FC, useState } from 'react';
import { TextField } from '@fluentui/react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

import FloatingBox from 'common/components/FloatingBox';

import styles from './Login.module.scss';
import { LogInField } from 'common/model/inputs';

const Login: FC = () => {
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');

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

  const someFieldIsEmpty = () => userMail === '' || userPassword === '';

  const logInClicked = () => console.info('Log In');

  return (
    <FloatingBox className={styles.Login}>
      <h2 className={styles.title}>{`Register`}</h2>
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
        onClick={logInClicked}
        disabled={someFieldIsEmpty()}
        className={styles.btn}
      />
      <p className={styles.message}>
        {`If you don't have an account, `}
        <br />
        <a href="/register"> {`you can create one here.`}</a>
      </p>
    </FloatingBox>
  );
};

export default Login;
