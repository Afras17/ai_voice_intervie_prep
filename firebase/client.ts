import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3mtQuc_G2pWUHIlhW_O8iqrBbD55-rNk",
  authDomain: "prepwise-3fa41.firebaseapp.com",
  projectId: "prepwise-3fa41",
  storageBucket: "prepwise-3fa41.firebasestorage.app",
  messagingSenderId: "656951375231",
  appId: "1:656951375231:web:210b2c7ff0ffa75e77964a",
  measurementId: "G-S2KKFVW0EQ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);