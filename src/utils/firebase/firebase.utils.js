// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,signInWithEmailAndPassword 
} from "firebase/auth";

import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCxsEvglBGX1h_ywyLhfg6dCvHWIIj6ak",
  authDomain: "crwn-e-shopping-store.firebaseapp.com",
  projectId: "crwn-e-shopping-store",
  storageBucket: "crwn-e-shopping-store.appspot.com",
  messagingSenderId: "941828739611",
  appId: "1:941828739611:web:96d77b209457467d12debe",
  measurementId: "G-XS8KT87XW0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = async() => await signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = async() => await signInWithRedirect (auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth,additionalInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);
console.log('doxref is',userDocRef);
  const userSnapshot = await getDoc(userDocRef);
console.log('snapshot is',userSnapshot);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
      console.log("document set", {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword= async(email,password)=>{
 if(!email || !password) return
 
 const response=await createUserWithEmailAndPassword(auth,email,password)
 return response
}
export const signInAuthUserWithEmailPassword= async(email,password)=>{
  if(!email || !password) return
  
  const response=await signInWithEmailAndPassword(auth,email,password)
  return response
 }