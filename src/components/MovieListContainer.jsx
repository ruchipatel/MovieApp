import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../assets/img/1.jpeg'
import axios from 'axios';


const MovieListContainer = ({title,category}) => {
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const apiKey = '556a8003238930143a7eddbb1488402f'; // Replace with your TMDb API key
        const apiUrl = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`;
    
        axios.get(apiUrl)
          .then((response) => {
            setMovieList(response.data.results);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });
          console.log(movieList);
      }, []);


    const settings = {
        speed: 500,
        slidesToShow: 4, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll
        centerMode: true,
       // variableWidth: true,
        arrows:false
      };
      const posterBaseUrl = 'https://image.tmdb.org/t/p/w500'; // Base URL for movie posters

      const maxOverviewLength = 100; // Maximum length for movie overview


      const truncateOverview = (overview) => {
        if (overview.length <= maxOverviewLength) {
          return overview;
        }
        return overview.slice(0, maxOverviewLength) + '...';
      };

  return (
    <div className="movie-list-container">
    <h1 className="movie-list-title">{title}</h1>
    <div className="movie-list-wrapper">

        <div className="movie-list-wrap">
          <Slider {...settings}>

          {movieList.map((movie) => (
             <div className="movie-list-item" key={movie.id}>
             <img className="movie-list-item-img" src={`${posterBaseUrl}${movie.poster_path}`} alt=""/>
             <span className="movie-list-item-title">{movie.title}</span>
             <p className="movie-list-item-desc">{truncateOverview(movie.overview)}</p>
             <button className="movie-list-item-button">Watch</button>
         </div>           
          ))}

            </Slider>
        </div>
      
         
    </div>
</div>
  )
}

export default MovieListContainer