import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBNcu12mh4KNgRU8Pjc-6Y3OHARmYgi2RY",
    authDomain: "eindproject-60f5c.firebaseapp.com",
    projectId: "eindproject-60f5c",
    storageBucket: "eindproject-60f5c.appspot.com",
    messagingSenderId: "246771654597",
    appId: "1:246771654597:web:e0139014124e576f0db5ac"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
