import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../utils/requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
        );
        const results = data.results;
        const randomMovie = results[Math.floor(Math.random() * results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching Netflix Originals:", error);
      }
    }
    fetchData();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  if (!movie)
    return (
      <div style={{ color: "#fff", padding: "20px" }}>Loading Banner...</div>
    );

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
          : "url('/fallback.jpg')",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <p className="banner-description">{truncate(movie.overview, 150)}</p>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
