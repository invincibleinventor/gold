import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAmZmuckTBZuUwetU3xROn0DBmdFjGZpvE",
  authDomain: "ttstvsschool.firebaseapp.com",
  databaseURL: "https://ttstvsschool-default-rtdb.firebaseio.com",
  projectId: "ttstvsschool",
  storageBucket: "ttstvsschool.appspot.com",
  messagingSenderId: "557949322894",
  appId: "1:557949322894:web:564892b7f3b3600ff7abdf",
  measurementId: "G-H56FQJJJ16"
};


export const app = initializeApp(firebaseConfig) as any;
export const auth = getAuth(app) as any;
export const storage = getStorage(app) as any;