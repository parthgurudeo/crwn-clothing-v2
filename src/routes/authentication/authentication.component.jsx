import './authentication.styles.scss'
import SignUpForm from '../../components/sign-up/sign-up-form.component'
import SignInForm from '../../components/sign-in/sign-in-form.component'

const Authentication = () => {
//   useEffect(async () => {
//     const response = await getRedirectResult(auth);
//     if (response) {
//       const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   }, []);
 

  return (
    <>
    <div className="authentication-container">
    <SignInForm/>
      <SignUpForm/>
     
      </div>

    </>
  );
};

export default Authentication;
