import React from 'react';
import PropTypes from 'prop-types';

// create a six column grid (desktop) of movies on the homepage

// create a functional component that will recieve props
// and that will return a div with the six col grid
const SixColGrid = (props) => {

  const renderElements = () => {
    const gridElements = props.children.map((element, i) => {
      return (
        <div key={i} className="grid-element">
          {element}
        </div>
      )
    })
    return gridElements;
  }

  return (
    <div className="grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="grid-content">
        {renderElements()}
      </div>
    </div>
  )
}

SixColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}

export default SixColGrid;