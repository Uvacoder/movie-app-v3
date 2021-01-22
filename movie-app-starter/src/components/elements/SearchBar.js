import React, { Component } from 'react';

// shows the search bar below the header

class SearchBar extends Component {
    state = {
        value: ''
    }

    timeout = null;

    // do search method with arrow function
    doSearch = (event) => {
        // sets the value from the input key 
        this.setState({ value: event.target.value })
        // waits for user to type something
        clearTimeout(this.timeout);
        // clear old timeout to set a new one
        this.timeout = setTimeout(() => {
            // getting callbakc funciton from props, 
            this.props.callback(this.state.value);
        }, 500)
    }

    render() {
        return (
            <div className="searchbar">
                <div className="searchbar-content">
                    <img src="/../../images/search_icon.png" alt="Search Icon"></img>
                    <input
                        type="text"
                        className="searchbar-input"
                        placeholder="Search"
                        // call back function 
                        onChange={this.doSearch}
                        // grab value from state to place into input field
                        value={this.state.value}
                    />
                </div>
            </div>
        )
    }

}


export default SearchBar;