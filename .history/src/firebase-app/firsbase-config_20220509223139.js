import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCiXgC9qAw9arHPB79qfPW2v18Gzjui7gs",
  authDomain: "monkey-blogging-172db.firebaseapp.com",
  projectId: "monkey-blogging-172db",
  storageBucket: "monkey-blogging-172db.appspot.com",
  messagingSenderId: "644601221235",
  appId: "1:644601221235:web:ff6dbd79f44edb15d21a06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
