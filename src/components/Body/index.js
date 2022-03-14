import React from "react";
import { useState, useEffect } from "react";
import './styles.css';

import Card from "./content";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const Bodydata = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Flash");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app"> 
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};


export default Bodydata;
