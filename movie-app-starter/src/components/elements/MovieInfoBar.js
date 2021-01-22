import React from 'react';
import { calcTime, convertMoney } from '../../helpers.js';

// shows the movie info / statistics / favorites button on a single movie page
const MovieInfoBar = (props) => {
    return (
        <div className="movieinfobar">
            <div className="movieinfobar-content">

                <div className="movieinfobar-content-col">
                    <span className="movieinfobar-info">Runtime: {calcTime(props.time)}</span>
                    <span className="movieinfobar-info">Budget: {convertMoney(props.budget)}</span>
                    <span className="movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
                </div>

                <div className="movieinfobar-content-col"></div>

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