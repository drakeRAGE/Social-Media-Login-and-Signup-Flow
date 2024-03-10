import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { Firestore, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCXt4m-uV-vqJcJ9vkuQsFDhR-Yf5TUa6A',
  authDomain: 'login-intern-e112f.firebaseapp.com',
  projectId: 'login-intern-e112f',
  storageBucket: 'login-intern-e112f.appspot.com',
  messagingSenderId: '775184147089',
  appId: '1:775184147089:web:d9749353a8e49d4b175530',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const firestore = new Firestore();
