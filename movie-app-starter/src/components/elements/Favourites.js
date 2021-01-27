  // Favourites
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/*
import useGlobal from '../store/globalAppState';
import Movies from '/Movies';
*/

// Favourites
const Favourites = () => (

/*
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~First Attempt
export default Favourites;

  /*
  Using global hooks to add a favorites section
  Notes:
  - install npm i use-global-hook in CD

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

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Second Attempt
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
    const { movieId, addToFavee } = this.state;
    localStorage.setItem('addToFavee', addToFavee);
    localStorage.setItem('movieId', addToFavee ? movieId : '');
  };
  */

  /*
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Third Attempt
  const [globalState, globalActions] = useGlobal();
  
  const [ready, setReady] = useState(false);

  useEffect(() => {
    console.log('hello');
    globalActions.setFavs();
    setReady(true);
  }, [globalActions]);

  return (
    <main>
      <section>
        <h2>Favourite Movies</h2>

        <div className="favourite-tutorial-icons">
          <img src="/../images/add icon.png" alt="Add Icon" className="favourite_icon"></img>
          <img src="/../images/arrow_icon.png" alt="Arrow Icon" className="favourite_icon"></img>
          <img src="/../images/favourite_icon.png" alt="Favourite Icon" className="favourite_icon"></img>
        </div>


        // Ternary, IF there is nothing in the global state storage, then output the Faves movie text, otherwise, global state = true
        {globalState.favs.length === 0 ?
          <div className="fave-movies-text">
            <p>Uh-oh, looks like you haven't chosen any movies yet!</p>
            <p>Feel free to return back to the home page and explore more movies!</p>
            <p>To add a favourite movie on the home page, you can click on the <img src="/../images/favourite_icon.png" alt="Favourite Icon" className="favourite_icon"></img> while hovering or by clicking on the movie poster.</p>
            <p>You can also find the <img src="/../images/favourite_icon.png" alt="Favourite Icon" className="favourite_icon"></img> when you click on an individual movie to learn more or watch a trailer.</p>
          </div>
          :

          (ready && <Movies movies={globalState.favs} = {true} />)
        }

      </section>
   
  );

  */


  <section className="favourite-section">

    <h2>Favourites</h2>

    <div className="favourite-tutorial-icons">
      <img src="/../images/add icon.png" alt="Add Icon" className="favourite_icon"></img>
      <img src="/../images/arrow_icon.png" alt="Arrow Icon" className="favourite_icon"></img>
      <img src="/../images/favourite_icon.png" alt="Favourite Icon" className="favourite_icon"></img>
    </div>

    <p>Uh-oh, looks like you haven't chosen any movies yet!</p>
    <p>Feel free to return back to the home page and explore more movies!</p>
    <p>To add a favourite movie on the home page, you can click on the <img src="/../images/favourite_icon.png" alt="Favourite Icon" className="favourite_icon"></img> while hovering or by clicking on the movie poster.</p>
    <p>You can also find the <img src="/../images/favourite_icon.png" alt="Favourite Icon" className="favourite_icon"></img> when you click on an individual movie to learn more or watch a trailer.</p>

  </section>
);

export default Favourites;
