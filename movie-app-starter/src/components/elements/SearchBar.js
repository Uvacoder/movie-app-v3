import React, { Component } from 'react';

// shows the search bar below the header

class SearchBar extends Component {
    state = {
        value: ''
    }

    timeout = null;

    doSearch = (event) => {
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
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
                        onChange={this.doSearch}
                        value={this.state.value}
                    />
                </div>
            </div>
        )
    }

}


export default SearchBar;