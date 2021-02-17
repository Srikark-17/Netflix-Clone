import React from "react";
import "./Overlay.css";
import CloseIcon from "@material-ui/icons/Close";
import ReactPlayer from "react-player/youtube";
import { IconButton } from "@material-ui/core";

const Overlay = ({ close, selected }) => {
  return (
    <div className="overlayRow">
      <div className="overlayRow__header">
        <IconButton
          style={{ background: "rgba(46,50,50,0.8)" }}
          onClick={() => close()}
        >
          <CloseIcon fontSize="large" style={{ fill: "#fff" }} />
        </IconButton>
      </div>
      <div className="videoContainer">
        <h4>
          {selected === "Hs-1_HNALhw" &&
            "Trailer Not Available, this is a default Netflix video"}
        </h4>
        <ReactPlayer
          controls={true}
          light
          url={`https://www.youtube.com/watch?v=${selected}`}
          width={1450}
          height={840}
        />
      </div>
    </div>
  );
};

export default Overlay;
