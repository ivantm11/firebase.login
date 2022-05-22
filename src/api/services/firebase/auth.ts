import { getAuth } from 'firebase/auth';

import firebase from './firebase';

const MyAuth = getAuth(firebase);

export default MyAuth;
