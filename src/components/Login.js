import React from 'react'
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from '../fbaseapp.js'

function SignIn() {
    let signinGoogle =()=> {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    return (
        <button className="btn-signin" onClick={signinGoogle}>Sign In With Google</button>
    )
}

function SignOut() {
    return (
        <button className="btn-signout" onClick={()=> auth.signOut()}>Sign Out</button>
    )
}
export { SignIn, SignOut }