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
import { login, logout, selectUser, selectRole } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const userSubscriptionRole = useSelector(selectRole);

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

  //   <Route
  // exact
  // path="/"
  // render={() => {
  //     return (
  //       this.state.isUserAuthenticated ?
  //       <Redirect to="/home" /> :
  //       <Redirect to="/test1" />
  //     )
  // }}
  // />

  return (
    <div className="app">
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
    </div>
  );
}

export default App;
