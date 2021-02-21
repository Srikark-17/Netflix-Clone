import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
import CompatibilityScreen from "./components/Compatibility/CompatibilityScreen";
import { isMobile } from "react-device-detect";
import { login, logout, selectRole } from "./features/userSlice";
import { auth } from "./firebase";
import Spinner from "react-spinkit";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const dispatch = useDispatch();
  const userSubscriptionRole = useSelector(selectRole);
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <div className="app__loading">
        <div className="app__loadingContents">
          <img
            src="https://pngimg.com/uploads/netflix/netflix_PNG15.png"
            alt="Netflix Logo"
          />
          <Spinner name="ball-spin-fade-loader" color="#e50914" fadeIn="none" />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {isMobile ? (
        <CompatibilityScreen />
      ) : (
        <Router>
          {!user ? (
            <LoginScreen />
          ) : (
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return !userSubscriptionRole ? (
                    <Redirect to="/profile" />
                  ) : (
                    <Redirect to="/home" />
                  );
                }}
              />
              <Route exact path="/profile">
                <ProfileScreen />
              </Route>
              <Route exact path="/home">
                <HomeScreen />
              </Route>
            </Switch>
          )}
        </Router>
      )}
    </div>
  );
}

export default App;
