import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA7PAgo73c549mLIJNTZvHDQmWJOb0mt_4',
  authDomain: 'karimmunication.firebaseapp.com',
  projectId: 'karimmunication',
  storageBucket: 'karimmunication.appspot.com',
  messagingSenderId: '891749339977',
  appId: '1:891749339977:web:333720ca7d61bdac530098',
  measurementId: 'G-DVYZQVTWZZ',
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
export default {firebase, auth};
