import { IUserWithEmail } from 'common/model/firebase';

export const CREATE_USER_WITH_EMAIL = 'CREATE_USER_WITH_EMAIL';
export const LOG_IN_USER_WITH_EMAIL = 'LOG_IN_USER_WITH_EMAIL';
export const LOG_IN_USER_WITH_GOOGLE = 'LOG_IN_USER_WITH_GOOGLE';
export const USER_SIGN_OUT = 'USER_SIGN_OUT';

const SagaActions = {
  createUserWithEmail: (payload: IUserWithEmail) => ({
    type: CREATE_USER_WITH_EMAIL,
    payload
  }),
  logInUserWithEmail: (payload: IUserWithEmail) => ({
    type: LOG_IN_USER_WITH_EMAIL,
    payload
  }),
  logInUserWithGoogle: () => ({
    type: LOG_IN_USER_WITH_GOOGLE
  }),
  userSignOut: () => ({ type: USER_SIGN_OUT })
};

export default SagaActions;
