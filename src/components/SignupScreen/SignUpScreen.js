import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignUpScreen.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((e) => alert(e.message));
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((e) => alert(e.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>{" "}
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
        <br />
        <span className="signUpScreen__warning">
          DO NOT enter your real credentials! This is not the real Netflix!
        </span>
      </form>
    </div>
  );
};

export default SignUpScreen;
