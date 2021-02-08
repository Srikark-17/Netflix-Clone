import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "../SignupScreen/SignUpScreen";
import { Animated } from "react-animated-css";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <Animated animationIn="slideInUp" isVisible={true}>
              <h1 className="loginScreen__lineOne">
                Unlimited films, TV Programs, and more.
              </h1>
            </Animated>
            <Animated animationIn="slideInLeft" isVisible={true}>
              <h2 className="loginScreen__lineTwo">
                Watch anywhere. Cancel at any time.
              </h2>
            </Animated>
            <Animated animationIn="slideInRight" isVisible={true}>
              <h3 className="loginScreen__lineThree">
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
            </Animated>
            <Animated animationIn="slideInDown" isVisible={true}>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="loginScreen__getStarted"
                    onClick={() => setSignIn(true)}
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </Animated>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
