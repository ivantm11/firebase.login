import { UserSession } from 'common/model';

const emptyUser: UserSession = {
  loggedIn: false,
  uid: '0-0-0-0',
  name: 'lorem ipsum',
  email: 'mail@mail.com'
};

interface AppState {
  user: UserSession;
  loadingRequest: boolean;
}

const initialState: AppState = {
  user: emptyUser,
  loadingRequest: false
};

export default initialState;
export type { AppState };
export { emptyUser };
