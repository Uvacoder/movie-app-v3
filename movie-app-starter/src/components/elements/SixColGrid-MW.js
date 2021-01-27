import React from 'react';
import PropTypes from 'prop-types';
//import MovieThumb from './MovieThumb';
import MovieThumb from './MovieThumb-MW';

// create a six column grid (desktop) of movies on the homepage

// create a functional component that will recieve props
// and that will return a div with the six col grid
const SixColGrid = ({ movies, header, loading }) => {
/*
  // const to send in thumbnail 
  const renderElements = () => {
    // grabs children from predefined props taht is sent in from home 

    const gridElements = props.children.map((element, i) => {
      return (
        // looping thru children  
        <div key={i} className="grid-element">
          
          {element}
        </div>
      )
    })
    return gridElements;
  }*/

  const renderElements = (movies) => {
      return movies.map((movie, i) => {
        return <MovieThumb key={i} movie={movie} />
      })
  }

  return (
    <div className="grid">
      
      {header && !loading ? <h1>{header}</h1> : null}
      <div className="grid-content">
    
        {renderElements(movies)}
      </div>
    </div>
  )
}

SixColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}

export default SixColGrid;