import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import firebase from './firebase';

const MyAuth = getAuth(firebase);
const MyGoogleAuthProvider = new GoogleAuthProvider();

export default MyAuth;
export { MyGoogleAuthProvider };
