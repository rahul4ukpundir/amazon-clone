
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { firebaseAuth, googleProvider } from "../firebase";

export const triggerCreateUserWithEmailAndPassword = async (values) => {
  return await createUserWithEmailAndPassword(
    firebaseAuth,
    values.email,
    values.password
  );
};
export const triggerLoginWithEmailAndPassword = async (values) => {
  return await signInWithEmailAndPassword(
    firebaseAuth,
    values.email,
    values.password
  );
};


export const triggerLoginWithGmail = async() =>{
   return await signInWithPopup(firebaseAuth, googleProvider)
} 