import React from "react";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

function SignIn() {
  function signInwithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={signInwithGoogle}>Login with Google</Button>
    </div>
  );
}

export default SignIn;
