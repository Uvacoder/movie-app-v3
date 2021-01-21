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
const MovieThumb = (props) => {
    return (
        <div className="moviethumb">
            {props.clickable ?
                <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
                    <img src={props.image} alt="moviethumb" />
                    <div className="moviethumb-title">
                        {props.movieName}
                    </div>
                    <div className="moviethumb-rating">
                        {props.movieRating}
                    </div>
                </Link>
                :
                <img src={props.image} alt="moviethumb" />
            }
        </div>
    )
}

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    movieName: PropTypes.string
}

export default MovieThumb;