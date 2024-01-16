import axiosInstance from "../../Apikeys/axios";

import React, { useEffect, useState } from "react";
import "./Banner.css";
// import "../../Apikeys/Axios";
// import "../../Apikeys/Requiest";

import Requiest from "../../Apikeys/Requiest";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // filename/fetch
      const request = await axiosInstance.get(Requiest.fetchNetflixOriginals);
      console.log(request);

      setMovie(
        request.data.results[
          // random varanum enda
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };

    fetchData();
  }, []);

  console.log(movie);

  // write type cut panna
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        // backgroundImage: `url('https://i.imgur.com/g0jXdZC.jpg')`,
        // backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {/* obtional chaining */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {/* 150 than irukanum enda */}
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
