import React from "react";


function TweetButton(){
  const tweetButtonStyles = {
    border: '1px solid grey',
    padding: '5px',
    borderRadius: '5px'
  }
  return (
    <h4 style={tweetButtonStyles}>tweet</h4>
  );
}

export default TweetButton;
