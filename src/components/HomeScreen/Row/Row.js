import React, { useEffect, useState } from "react";
import axios from "../../../fetchAPI/axios/axios";
import "./Row.css";
import Overlay from "./Overlay";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

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
    <section className="row">
      {isOpen && <Overlay videoOverlay selected={selected} close={closeOpen} />}
      <h1>{title}</h1>
      <div className="row__horizontal">
        <ul className="row__item--container">
          {movies.map((movie) => (
            <li
              key={movie.poster_path}
              className={`row__item ${isLargeRow && "row__itemLarge"}`}
            >
              <a
                onClick={() =>
                  setOpen(movie?.title || movie?.name || movie?.original_name)
                }
              >
                <img
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Revamps-Logo-1280x720.jpg";
                  }}
                  alt={movie.name}
                />
                <span className="placeholder--title"></span>
                <span className="title__name">
                  {movie?.title || movie?.name || movie?.original_name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Row;
