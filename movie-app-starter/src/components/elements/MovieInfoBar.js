import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../helpers.js';
//import './MovieInfoBar.css';
//import '../../styles.scss';

const MovieInfoBar = (props) => {
    return (
        <div className="rmdb-movieinfobar">
            <div className="rmdb-movieinfobar-content">
                <div className="rmdb-movieinfobar-content-col">
                    <FontAwesome className="fa-time" name="clock-o" size="2x" />
                    <span className="rmdb-movieinfobar-info">Running time: {calcTime(props.time)}</span>
                    <FontAwesome className="fa-budget" name="money" size="2x" />
                    <span className="rmdb-movieinfobar-info">Budget: {convertMoney(props.budget)}</span>
                    <FontAwesome className="fa-revenue" name="ticket" size="2x" />
                    <span className="rmdb-movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
                </div>
                <div className="rmdb-movieinfobar-content-col">

                </div>
                <div className="rmdb-movieinfobar-content-col">
                    <FontAwesome className="fa-release-date" name="release" size="2x" />
                    <div className="fave">
                        <span className="rmdb-movieinfobar-info">Add / Remove to Favourites <img src="/../../images/favourite_icon.png"></img></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfoBar;