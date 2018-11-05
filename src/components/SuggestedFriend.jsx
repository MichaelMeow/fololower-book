import React from "react";
import PropTypes from "prop-types";

function SuggestedFriend(props){
  const friendStyle = {
    backgroundColor: props.color,
    width: '50px',
    height: '50px'
  }
  return (
    <div>
      <p>{props.name}</p>
      <div style={friendStyle}>Photo</div>
    </div>
  );
}

SuggestedFriend.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default SuggestedFriend;
