import { UserData } from './user';

export type UserSession = UserData & {
  loggedIn: boolean;
};
