import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiData = () => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    const apiKey = '556a8003238930143a7eddbb1488402f'; // Replace with your TMDb API key
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        setMovieList(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
         {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movieList.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Overview: {movie.overview}</p>
              <p>Release Date: {movie.release_date}</p>
              <p>Popularity: {movie.popularity}</p>
            </li>
          ))}
        </ul>
      )}
     
    </div>
  );
};

export default ApiData;
