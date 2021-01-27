import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

// shows each movie on the homepage
/*
    Format:
            [x] Poster
    [x] Title          [x] Rating
    [] Genres
    [] Release Date    [] Runtime
*/
const MovieThumb = ({ movie, movieId }) => {
    return (
        <div className="moviethumb">
            <div className="movie">
                
               
                    <Link to={{ 
                        // grabs the movie id so that it can be grabbed with link to show on URL
                        pathname: `/single-movie/${movieId}`, 
                        // sends in the movie name to be shwon in header
                        movieName: `${movie.name}` 
                    }}>
                    
                       {movie.poster_path === null ? <img src="./images/no_image.jpg" /> :  <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />}
                        <div className="moviethumb-details">
                            <div className="moviethumb-title">{movie.name}</div>
                            <div className="moviethumb-overview">{movie.overview}</div>
                            <div className="moviethumb-release">[{movie.release}]</div>
                        </div>
                        <div className="moviethumb-moreinfo-rating">
                            <div className="moviethumb-moreinfo"><button className="moviethumb-moreinfo-btn"><p>More Info</p></button></div>
                            <div className="moviethumb-rating">{movie.rating}</div>
                        </div>
                    </Link>
                   
                
            </div>
        </div>
    )
}



export default MovieThumb;