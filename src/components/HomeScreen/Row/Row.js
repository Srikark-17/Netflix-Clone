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

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div className="row">
      {isOpen && <Overlay videoOverlay selected={selected} close={closeOpen} />}
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div
                className="container"
                onClick={() =>
                  setOpen(movie?.title || movie?.name || movie?.original_name)
                }
              >
                <img
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie?.title || movie?.name || movie?.original_name}
                />
                <div className="text">
                  <h1
                    className={`row__posterName ${
                      isLargeRow && "row__posterLargeName"
                    }`}
                  >
                    {movie?.title || movie?.name || movie?.original_name}
                  </h1>
                  <p
                    className={`row__posterDescription ${
                      isLargeRow && "row__posterLarge"
                    }`}
                  >
                    {isLargeRow
                      ? truncate(movie?.overview, 135)
                      : truncate(movie?.overview, 50)}
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Row;
