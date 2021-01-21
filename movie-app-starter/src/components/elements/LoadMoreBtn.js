import React from 'react';

// shows the "load more" button for users to view more movies
const LoadMoreBtn = (props) => {
  return (
    <div className="loadmorebtn" onClick={props.onClick}>
      <p>{props.text}</p>
    </div>
  )
}

export default LoadMoreBtn;
