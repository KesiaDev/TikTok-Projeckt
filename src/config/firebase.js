import { initializeApp } from "firebase/app";
import { getFireatore, getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD_4yal5QCSjLk1s2UmEFuajeyPnz-8PQE",
  authDomain: "tiktok-jornada-5a5bd.firebaseapp.com",
  projectId: "tiktok-jornada-5a5bd",
  storageBucket: "tiktok-jornada-5a5bd.appspot.com",
  messagingSenderId: "729640171576",
  appId: "1:729640171576:web:71de0de692e1cb71278ecd"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;