import {
  createUserWithEmailAndPassword,
  signOut,
  UserCredential
} from 'firebase/auth';

import { MyAuth } from './firebase';
import { INewUser } from 'common/model/firebase';

class FirebaseService {
  static async createUserWithEmail({
    email,
    password
  }: INewUser): Promise<UserCredential> {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        MyAuth,
        email,
        password
      );
      return userCredentials;
    } catch (error) {
      throw error;
    }
  }

  static async userSignOut(): Promise<void> {
    try {
      await signOut(MyAuth);
    } catch (error) {
      throw error;
    }
  }
}

export default FirebaseService;
