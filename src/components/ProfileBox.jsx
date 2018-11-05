import React from "react";
import ProfileButton from "./ProfileButton"



function ProfileBox(props){

  const profilePic = {
    width: "60px",
    height: "60px",
    backgroundColor: 'blue',
    borderRadius: '10px',
    border: '2px solid white'
  }

  const flexBottom = {
    display: 'flex',
    alignContent: "flexBottom",
    justifyContent: "space-around"
  }

  const border={
    width: '300px'
  }

  return (
    <div className="bordery" style={border}>
    <div style={flexBottom}>
      <div style={profilePic}></div>
     <h5>{props.name}</h5>
     </div>
       <div style={flexBottom}>
         <ProfileButton name="TWEETS"/>
         <ProfileButton name="FOLLOWING"/>
         <ProfileButton name="FOLOLOWERS"/>
       </div>
    </div>
  );
}

export default ProfileBox;
