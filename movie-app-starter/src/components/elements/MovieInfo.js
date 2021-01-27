import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
//import MovieThumb from './MovieThumb';
import MovieThumb from './MovieThumb-MW';


// shows the main movie info (title, overview, rating, etc) on a single movie page

/*
    To Include:
      [x] Title
      [ ] Genres    <============
      [x] Overview
      [x] Rating
      [x] Director
      [x] Runtime
      [x] Budget
      [x] Revenue
      [] Favorite Button    <============
      [x] Actors (Media)
      [ ] Related Movies ?    <============

*/

const MovieInfo = (props) => {
  return (

    <div className="movieinfo"
      style={{
        // styles and set the background image for the movie page
        background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')` : '#000'
      }}
    >

      <div className="movieinfo-content">

        <div className="movieinfo-thumb">
          <MovieThumb
            // places the thumbmnail in the movie for the "single-movie" page / not clickable
            image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : './images/no_image.jpg'}
            // not clickable 
            clickable={false}
          />
        </div>

        <div className="movieinfo-text">
          
          <h1>{props.movie.title}</h1>

          <h3>OVERVIEW</h3>
          <p>{props.movie.overview}</p>

          <h3>RATING (IMDB)</h3>
          <p className="imdb-rating">{props.movie.vote_average}</p>

          {props.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
          {props.directors.map((element, i) => {
            // creates a map method to create elements for each director
            return <p key={i} className="director">{element.name}</p>
          })}

        </div>
      </div>
    </div>
  )
}

export default MovieInfo;