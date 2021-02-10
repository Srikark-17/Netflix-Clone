import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../../fetchAPI/axios/axios";
import requests from "../../../fetchAPI/requests/Requests";
import TypeWriter from "react-typewriter";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Overlay from "./Overlay";
import movieTrailer from "movie-trailer";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const closeOpen = () => {
    console.log("CLOSING");
    setIsOpen(false);
  };

  const setOpen = (movieName) => {
    // setSelected(movieName);
    movieTrailer(movieName)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setSelected("");
        setSelected(urlParams.get("v"));
      })
      .catch((err) => {
        setSelected("Hs-1_HNALhw");
      });
    setIsOpen(true);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <span>
      {isOpen && <Overlay videoOverlay selected={selected} close={closeOpen} />}
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button
              className="banner__button"
              onClick={() =>
                setOpen(movie?.title || movie?.name || movie?.original_name)
              }
            >
              <PlayArrowIcon />
              Play
            </button>
            <button className="banner__button">
              <InfoOutlinedIcon />
              More Info
            </button>
          </div>
          <h1 className="banner__description">
            <TypeWriter typing={1.8}>
              {truncate(movie?.overview, 200)}
            </TypeWriter>
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </span>
  );
};

export default Banner;
