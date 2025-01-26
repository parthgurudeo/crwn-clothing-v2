import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
  } from "./../../utils/firebase/firebase.utils";

  import {SignUpForm} from '../../components/sign-up-form/sign-up-form.component'
  const SignIn = () => {
    
  
    const loginWithGoogle = async () => {
      try {
        const response = await signInWithGooglePopup();
        console.log("User from popup:", response.user);
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
        
      } catch (error) {
        console.error("Error signing in with Google popup:", error);
      }
    };
  
    const loginWithGoogleRedirect = async () => {
      try {
        await signInWithGoogleRedirect(auth); // Redirect will take place here
      } catch (error) {
        console.error("Error signing in with Google redirect:", error);
      }
    };
  
    return (
      <>
        <h1>SignIn Component</h1>
        <button onClick={loginWithGoogle}>Sign in with Google Popup</button>
        <SignUpForm/>
      </>
    );
  };
  
  export default SignIn;
  