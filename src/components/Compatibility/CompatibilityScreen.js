import React from "react";
import "./CompatibilityScreen.css";
import ComputerIcon from "@material-ui/icons/Computer";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import TabletIcon from "@material-ui/icons/Tablet";
import TabletMacIcon from "@material-ui/icons/TabletMac";

const CompatibilityScreen = () => {
  return (
    <div className="compatibilityScreen">
      <div className="compatibilityScreen__background">
        <img
          className="compatibilityScreen__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        <div className="compatibilityScreen__gradient" />
      </div>
      <div className="compatibilityScreen__body">
        <div className="compatibilityScreen__glass">
          <form>
            <h1>Incompatible Device</h1>
            <div className="compatibilityScreen__icons">
              <ComputerIcon />
              <PhoneIphoneIcon />
              <TabletIcon />
              <TabletMacIcon />
            </div>
            <h3>
              The current device is not compatible with the website yet. The
              site is constantly being improved and perfected. Be sure to follow
              me below!
            </h3>
            <a href="https://www.instagram.com/srikar.programs/">
              <div className="compatibilityScreen__instagram">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
                  alt="Instagram Logo"
                />
                <h3>srikar.programs</h3>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/srikar-kusumanchi/">
              <div className="compatibilityScreen__linkedin">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                  alt="LinkedIn Logo"
                />
                <h3>srikar-kusumanchi</h3>
              </div>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompatibilityScreen;
