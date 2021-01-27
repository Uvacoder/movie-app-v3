import { useState } from 'react';
import searchIcon from '../../images/search_icon.png';
import { API_URL, API_KEY } from '../../config';

// shows the search bar below the header
function SearchBar({ handleSetMovies }) {
    
    const [query, setQuery] = useState('');

    let timeout = null;

    // do search method with arrow function
    const doSearch = (event) => {
        // sets the value from the input key 
        setQuery( event.target.value );


        // waits for user to type something
       // const query = event.target.value.trim();
        let endpoint;

        clearTimeout(timeout);
        // clear old timeout to set a new one
        timeout = setTimeout(() => {
            // getting callbakc funciton from props, 
            //this.props.callback(this.state.value);
             // check to see if theres anything in the search term
            if (query === '') {
                // if not, populate the the movie with popular movies
                endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
            } else {
                // if so, show the searched movies
                endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;
            }
            // use fetchITem to grab the movies

            const fetchItems = async () => {
                const res = await fetch(endpoint);
                const data = res.json();
                const movies = data.results;
                handleSetMovies(movies);
            }
            fetchItems();
        
        }, 500)
    }

    return (
        <div className="searchbar">
            <div className="searchbar-content">
                <img src={searchIcon} alt="Search Icon" />
                <input
                    type="text"
                    className="searchbar-input"
                    placeholder="Search"
                    // call back function 
                    onChange={doSearch}
                    // grab value from state to place into input field
                    //value={query}
                />
            </div>
        </div>
    )


}


export default SearchBar;