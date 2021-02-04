import React from "react";

const NavigationBar = () => {
  return (
    <div className="nav">
      <div className="nav__contents">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
          className="nav__logo"
        />
        <img
          src="http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="User avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default NavigationBar;
