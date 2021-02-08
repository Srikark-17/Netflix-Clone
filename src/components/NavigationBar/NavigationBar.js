import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectRole } from "../../features/userSlice";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const userSubscriptionRole = useSelector(selectRole);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => {
            userSubscriptionRole && history.push("/");
          }}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
          className="nav__logo"
        />
        <img
          src="http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="User avatar"
          className="nav__avatar"
          onClick={() => history.push("/profile")}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
