import React from "react";
import PropTypes from "prop-types";


function NewsItem(props){
  const profilePhoto = {
    backgroundColor: props.color,
    width: '50px',
    height: '50px'
  }
  return (
    <div>
      <div style={profilePhoto}></div>
      <h4>{props.name}</h4>
      <p>{props.status}</p>
    </div>
  );
}

export default NewsItem;
