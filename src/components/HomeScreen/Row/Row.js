import React, { useEffect, useState } from "react";
import axios from "../../../fetchAPI/axios/axios";
import "./Row.css";
import Overlay from "./Overlay";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
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
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {isOpen && <Overlay videoOverlay selected={selected} close={closeOpen} />}
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <>
                <img
                  onClick={() =>
                    setOpen(movie?.title || movie?.name || movie?.original_name)
                  }
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
                <div className="overlay">
                  <h1 className="text">{movie.name}</h1>
                </div>
              </>
            )
        )}
      </div>
    </div>
  );
};

export default Row;
