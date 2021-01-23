import React from 'react';
import { calcTime, convertMoney } from '../../helpers.js';

// shows the movie info / statistics / favorites button on a single movie page
const MovieInfoBar = (props) => {


    /*
  state = {
    favourites: [],
    setFavourites: []
}

  const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};
}
*/

/*

  componentWillMount() {
    localStorage.getItem('fave-movie') && this.setState( {
      fave-movie: JSON.parse(localStorage.getItem('fave-movie')),
    })
  }

  componentDidMount() {
    if(!localStorage.getItem('fave-movie')) {
      this.fetchData();
    } else {
      console.log()
    }
  }
*/
/*
addFaveMovies = () => {
  const { movieId, addToFave } = this.state;
  localStorage.setItem('addToFave', addToFave);
  localStorage.setItem('movieId', addToFavee ? movieId : '');
};



componentDidMount() {
  const addToFave = localStorage.getItem('addToFave') === 'true';
  const movieId = addToFave ? localStorage.getItem('movieId') : '';
  this.setState({ movieId, addToFave });
}


*/

    return (
        <div className="movieinfobar">
            <div className="movieinfobar-content">

                <div className="movieinfobar-content-col">
                    <span className="movieinfobar-info"><b>Runtime:</b> {calcTime(props.time)}</span>
                    <span className="movieinfobar-info"><b>Budget:</b> {convertMoney(props.budget)}</span>
                    <span className="movieinfobar-info"><b>Revenue:</b> {convertMoney(props.revenue)}</span>
                </div>

                <div className="movieinfobar-content-col">
                    <div className="fave">


                    
                        <span className="movieinfobar-info">Add / Remove to Favourites <img src="/../../images/favourite_icon.png" alt="Favourite Icon"></img></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieInfoBar;