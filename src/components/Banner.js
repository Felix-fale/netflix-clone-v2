import "./Banner.scss";
import { useState, useEffect } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Requests from "../config/Requests";
import axios from "axios";
import requests from "../config/Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  const bannerStyle = {
    backgroundImage: `url("https://image.tmbd.org/t/p/original/${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.lenght - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + "..."
      : "No description";
  }

  console.log(movie);
  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <p className="banner__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ut
          ve ! {truncateText(movie?.overview, 100)}
        </p>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">
            <PlayArrowIcon></PlayArrowIcon> Lecture
          </button>
          <button className="banner__button">
            <HelpOutlineIcon></HelpOutlineIcon> Plus d'infos
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
