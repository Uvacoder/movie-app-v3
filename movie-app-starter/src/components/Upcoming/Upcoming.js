import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import SearchBar from '../elements/SearchBar';
import SixColGrid from '../elements/SixColGrid';
import MovieThumb from '../elements/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn';
import Spinner from '../elements/Spinner';
import { Link } from 'react-router-dom';

// note: add a "not found" image when movie posters don't show up

// home page
// - has the computing and functions
// - imports the visual components (searchbar, etc)

class Upcoming extends Component {
    state = {
        movies: [],
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
    }

    // check if component has mounted
    componentDidMount() {
        if (localStorage.getItem('HomeState')) {
            const state = JSON.parse(localStorage.getItem('HomeState'));
            this.setState({ ...state });
        } else {
            this.setState({ loading: true });
            // Specify API URL (Start by calling the popular movies first)
            // URL first, then API key
            const endpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
            // send endpoint to the method
            this.fetchItems(endpoint);
        }
    }

    // search functinality 
    searchItems = (searchTerm) => {
        let endpoint = '';
        this.setState({
            movies: [],
            loading: true,
            searchTerm
        })

        // check to see if theres anything in the search term
        if (searchTerm === '') {
            // if not, populate the the movie with popular movies
            endpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
        } else {
            // if so, show the searched movies
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }
        // use fetchITem to grab the movies
        this.fetchItems(endpoint);
    }

    // populates more popular movies 
    loadMoreItems = () => {
        let endpoint = '';
        this.setState({ loading: true });

        if (this.state.searchTerm === '') {
            // will load more popular movies (on home page)
            endpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
        } else {
            // will load more movies on the searched page
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }
        this.fetchItems(endpoint);
    }

    // feth items methods
    fetchItems = (endpoint) => {
        fetch(endpoint)
            // (then, waits for the result) use json to convert results from the raw data
            .then(result => result.json())
            .then(result => {
                // get data into state
                this.setState({
                    // load new movies while appeneding the movies to the older ones
                    movies: [...this.state.movies, ...result.results],
                    loading: false,
                    currentPage: result.page,
                    totalPages: result.total_pages
                }, () => {
                    if (this.state.searchTerm === "") {
                        localStorage.setItem('HomeState', JSON.stringify(this.state));
                    }
                })
            })
            .catch(error => console.error('Error:', error))
    }

    render() {
        return (
            <div className="upcoming">
                <div>
                    <SearchBar callback={this.searchItems} />
                </div>

                <div className="header-form-select">
                    <div className="form-popular">
                        <Link to="././Home">
                            <p>Popular</p>
                        </Link>
                    </div>
                    <div className="vertical-form"></div>
                    <div className="form-top-rated">
                        <Link to="././TopRated">
                            <p>Top Rated</p>
                        </Link>
                    </div>
                    <div className="vertical-form"></div>
                    <div className="form-now-playing">
                        <Link to="././NowPlaying">
                            <p>Now Playing</p>
                        </Link>
                    </div>
			    </div>

                <div className="upcoming-grid">
                    <SixColGrid
                        header={this.state.searchTerm ? 'Search Result' : 'Upcoming'}
                        loading={this.state.loading}
                    >
                        {this.state.movies.map((element, i) => {
                            return <MovieThumb
                                key={i}
                                clickable={true}
                                image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                                movieId={element.id}
                                movieName={element.original_title}
                                movieRating={element.vote_average}
                            />
                        })}
                    </SixColGrid>
                    {this.state.loading ? <Spinner /> : null}
                    {(this.state.currentPage <= this.state.totalPages && !this.state.loading) ?
                        <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} />
                        : null}

                </div>
            </div>
        )
    }
}

export default Upcoming;

