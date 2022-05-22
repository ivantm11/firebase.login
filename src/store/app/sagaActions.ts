import { INewUser } from 'common/model/firebase';

export const CREATE_USER_WITH_EMAIL = 'CREATE_USER_WITH_EMAIL';

const SagaActions = {
  createUserWithEmail: (payload: INewUser) => {
    return { type: CREATE_USER_WITH_EMAIL, payload };
  }
};

export default SagaActions;
