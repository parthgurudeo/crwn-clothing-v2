import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.css";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log("got the user", response.user);
    await createUserDocumentFromAuth(response.user);
  };
  const [formFields, setState] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setState(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response= await signInAuthUserWithEmailPassword(email,password)
      console.log(response)
      resetFormFields();
    } catch (err) {
      switch (err.code){
        case 'auth/wrong-password':
          alert('Incorrect password')
          break


        case 'auth/user-not-found':
          alert('User not found')
            break  
            default:
              console.log(err);   
        }
      console.error(err);
    }
  };
  return (
    <>
      <div className="sign-in-container">
        <h2>Already have an account!</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="text"
            required
            value={email}
            onChange={handleChange}
            name="email"
          />

          <FormInput
            label="Password"
            type="password"
            required
            value={password}
            onChange={handleChange}
            name="password"
          />

          <div className="buttons-container">
            {" "}
            <Button
              children={"Sign in"}
              buttonType={"inverted"}
              type="submit"
            />
            <Button
              children={"Google sign in"}
              buttonType={"google"}
              type='button'
              onClick={signInWithGoogle}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
