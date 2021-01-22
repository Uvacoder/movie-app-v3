import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// shows each movie on the homepage
/*
    Format:
            [x] Poster
    [x] Title          [x] Rating
    [] Genres
    [] Release Date    [] Runtime
*/
const MovieThumb = ({ clickable, image, movieId, movieName, movieOverview, movieRelease, movieRating }) => {
    return (
        <div className="moviethumb">
            <div className="movie">
                {clickable ?
                // ^ asks if clickable/ then links to pathname that will show up into URL
                // POSSIBLY CHANGE THIS TO LINK THE THUMBNAIL CLICK TO A NEW PAGE!!!
                    <Link to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>
                    
                        <img src={image} alt="Movie Poster" />
                        <div className="moviethumb-details">
                            <div className="moviethumb-title">{movieName}</div>
                            <div className="moviethumb-overview">{movieOverview}</div>
                            <div className="moviethumb-release">[{movieRelease}]</div>
                        </div>
                        <div className="moviethumb-moreinfo-rating">
                            <div className="moviethumb-moreinfo"><button className="moviethumb-moreinfo-btn"><p>More Info</p></button></div>
                            <div className="moviethumb-rating">{movieRating}</div>
                        </div>
                    </Link>
                    :
                    <img src={image} alt="Movie Poster" />
                }
            </div>
        </div>
    )
}

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    movieName: PropTypes.string
}

export default MovieThumb;