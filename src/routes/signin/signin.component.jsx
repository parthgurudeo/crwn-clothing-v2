import {signInWithGooglePopup,createUserDocumentFromAuth} from './../../utils/firebase/firebase.utils'

const SignIn=()=>{
    const loginWithGoogle=async()=>{
        const response=await signInWithGooglePopup()
        console.log('got the user',response.user);
const userDocRef=await createUserDocumentFromAuth(response.user)
    }
    return (
        <>
        <h1>
        SignIn component
        </h1>
        <button onClick={loginWithGoogle}>Sign in with google</button>
        </>
    )
}

export default SignIn