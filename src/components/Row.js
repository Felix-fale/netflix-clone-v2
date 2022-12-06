import axios from "axios";
import { useState, useEffect } from "react";
import "./Row.scss";

function Row({title, fetchUrl}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmbd.org/t/p/original/${movie.backdrop_path}`}
              className="row__image"
              alt="{movie?.title || movie?.name || movie?.original_title}"
            />
          </div>
        ))}
        Image
      </div>
    </div>
  );
}

export default Row;
