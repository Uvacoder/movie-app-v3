// Favourites

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favourites = () => (

  <section className="favourite-section">

    <h2>Favourites</h2>

    <div className="favourite-tutorial-icons">
      <img src="../../images/add icon.png" alt="Add Icon" className="favourite_icon"></img>
      <img src="../../images/arrow_icon.png" alt="Arrow Icon" className="favourite_icon"></img>
      <img src="../../images/favourite_icon.png" alt="Favourite Icon" className="favourite_icon"></img>
    </div>

    <p>Uh-oh, looks like you haven't chosen any movies yet!</p>
    <p>Feel free to return back to the home page and explore more movies!</p>
    <p>To add a favourite movie on the home page, you can click on the <img src="../../images/favourite_icon.png" alt="Favourite Icon" className="favourite_icon"></img> while hovering or by clicking on the movie poster.</p>
    <p>You can also find the <img src="../../images/favourite_icon.png" alt="Favourite Icon" className="favourite_icon"></img> when you click on an individual movie to learn more or watch a trailer.</p>

  </section>
);

export default Favourites;
