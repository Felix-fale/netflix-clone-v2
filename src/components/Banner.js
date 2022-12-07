import "./Banner.scss";
import { useState, useEffect } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import axios from "axios";
import requests from "../config/Requests";
import QuickView from "./QuickView";
import { Link } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false);

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(popup);

  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + "..."
      : "No description";
  }

  function handleClickPopup() {
    popup ? setPopup(false) : setPopup(true);
  }

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <p className="banner__description">
          {truncateText(movie?.overview, 100)}
        </p>
        <div className="banner__buttons">
          <Link to={`/video/${movie?.id}`}>
            <button className="banner__button banner__button--play">
              <PlayArrowIcon></PlayArrowIcon> Lecture
            </button>
          </Link>

          <button className="banner__button" onClick={handleClickPopup}>
            <HelpOutlineIcon></HelpOutlineIcon> Plus d'infos
          </button>
        </div>
      </div>
      <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        popup={handleClickPopup}
        popupStatut={popup}
      ></QuickView>
    </header>
  );
}

export default Banner;
