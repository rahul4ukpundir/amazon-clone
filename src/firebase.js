import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDt14V7NINsyIZVI-iZjyYSe61jw726Ot4",
    authDomain: "clone-3fb68.firebaseapp.com",
    projectId: "clone-3fb68",
    storageBucket: "clone-3fb68.appspot.com",
    messagingSenderId: "543673717941",
    appId: "1:543673717941:web:90206bbb2152db4e9f1afc"
  };

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

//for google
export const googleProvider = new GoogleAuthProvider()