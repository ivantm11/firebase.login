import { getAnalytics } from 'firebase/analytics';

import firebase from './firebase';

const analytics = getAnalytics(firebase);

export default analytics;