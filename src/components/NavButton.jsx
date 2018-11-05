import React from "react";
import PropTypes from "prop-types";


function NavButton(props){
  const navButtonStyles = {
    border: '1px solid grey',
    padding: '5px',
    borderRadius: '5px'
  }

  return (
    <h4 style={navButtonStyles}>{props.name}</h4>
  );
}


NavButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavButton;
