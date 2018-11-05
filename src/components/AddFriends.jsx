import React from "react";
import SuggestedFriend from './SuggestedFriend';

function AddFriends(){
  return (
    <div className="bordery">
      
      <h3>Suggested Friends</h3>
      <SuggestedFriend
        name="Sarah Sabo"
        color="brown"/>
      <SuggestedFriend
        name="Henrietta Smith"
        color="blue"/>
      <SuggestedFriend
        name="George Jackson"
        color="grey"/>
    </div>
  );
}

export default AddFriends;
