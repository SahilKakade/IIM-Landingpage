import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbyulpFumiG_OBGNrf7ipz36V7-R3pJZY",
    authDomain: "iim-form.firebaseapp.com",
    projectId: "iim-form",
    storageBucket: "iim-form.firebasestorage.app",
    messagingSenderId: "215775871893",
    appId: "1:215775871893:web:6c97958bab0b4c9e9d6c9c"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
