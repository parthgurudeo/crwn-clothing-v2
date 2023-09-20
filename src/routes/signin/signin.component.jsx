import { useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "./../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from '../../components/sign-up/sign-up-form.component'
const SignIn = () => {
//   useEffect(async () => {
//     const response = await getRedirectResult(auth);
//     if (response) {
//       const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   }, []);
  const loginWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log("got the user", response.user);
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <>
      <h1>SignIn component</h1>
      <button onClick={loginWithGoogle}>Sign in with google</button>
      <SignUpForm/>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google Redirect
      </button> */}
    </>
  );
};

export default SignIn;
