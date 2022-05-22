import { getAnalytics } from 'firebase/analytics';

import firebase from './firebase';

const MyAnalytics = getAnalytics(firebase);

export default MyAnalytics;
