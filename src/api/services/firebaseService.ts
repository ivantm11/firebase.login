import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential
} from 'firebase/auth';

import { IUserWithEmail } from 'common/model/firebase';
import { MyAuth, MyGoogleAuthProvider } from './firebase';

class FirebaseService {
  static async createUserWithEmail({
    email,
    password
  }: IUserWithEmail): Promise<UserCredential> {
    try {
      const userCreated = await createUserWithEmailAndPassword(
        MyAuth,
        email,
        password
      );
      return userCreated;
    } catch (error) {
      throw error;
    }
  }

  static async logInUserWithEmail({
    email,
    password
  }: IUserWithEmail): Promise<UserCredential> {
    try {
      const userLogged = await signInWithEmailAndPassword(
        MyAuth,
        email,
        password
      );
      return userLogged;
    } catch (error) {
      throw error;
    }
  }

  static async logInUserWithGoogle(): Promise<UserCredential> {
    try {
      const userLogged = await signInWithPopup(MyAuth, MyGoogleAuthProvider);
      return userLogged;
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
