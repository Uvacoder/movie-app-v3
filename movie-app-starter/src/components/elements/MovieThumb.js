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
            <div className="movie">
                {props.clickable ?
                    <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
                        <img src={props.image} alt="moviethumb" />
                        <div className="moviethumb-details">
                            <div className="moviethumb-title">{props.movieName}</div>
                            <div className="moviethumb-overview">{props.movieOverview}</div>
                            <div className="moviethumb-release">[{props.movieRelease}]</div>
                        </div>
                        <div className="moviethumb-moreinfo-rating">
                            <div className="moviethumb-moreinfo"><button className="moviethumb-moreinfo-btn"><p>More Info</p></button></div>
                            <div className="moviethumb-rating">{props.movieRating}</div>
                        </div>
                    </Link>
                    :
                    <img src={props.image} alt="moviethumb" />
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