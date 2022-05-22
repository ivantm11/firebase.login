import { User } from 'firebase/auth';

import { UserData } from 'common/model/user';

export const cleanUserData = (newUser: User): UserData => {
  return {
    uid: newUser.uid,
    name: newUser.displayName ?? '',
    email: newUser.email ?? ''
  };
};
