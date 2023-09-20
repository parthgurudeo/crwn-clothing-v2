import { useState } from "react";
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.css'
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setState] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user,{displayName})
      setState(defaultFormFields)
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="sign-up-container">
        <h2>Don't have an account!</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' 
           type="text"
           required
           value={displayName}
           onChange={handleChange}
           name="displayName"
          />
         <FormInput label='Email' 
           type="text"
           required
           value={email}
           onChange={handleChange}
           name="email"
          />
         
          <FormInput label='Password' 
           type="password"
           required
           value={password}
           onChange={handleChange}
           name="password"
          />
           <FormInput label='Confirm Password' 
           type="password"
           required
           value={confirmPassword}
           onChange={handleChange}
           name="confirmPassword"
          />
          <Button children={'Sign up'} buttonType={'inverted'} />
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
