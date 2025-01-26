import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";
import "./sign-up-form.styles.scss";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, password, confirmPassword, email } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    console.log(event);

    event.preventDefault();
    if (password !== confirmPassword) return alert("Passwords do not match");
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      requestFormReset();
    } catch (error) {
      console.error(error);
    }
  };
  const requestFormReset = () => {
    setFormFields({ ...formFields, defaultFormFields });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          value={displayName}
          type="txt"
          required
          onChange={handleChange}
          name="displayName"
        />
        <FormInput
          label="Email"
          value={email}
          type="txt"
          required
          onChange={handleChange}
          name="email"
        />
        <FormInput
          label="Password"
          value={password}
          type="password"
          required
          onChange={handleChange}
          name="password"
        />
        <FormInput
          label="Confirm Password"
          value={confirmPassword}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
        />
        <Button type="submit">Submit form</Button>
      </form>
    </div>
  );
};
