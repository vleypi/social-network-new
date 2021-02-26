import React from "react"

function ProfileInfo(props){
  return(
    <div className="profile-info">
        <img src={props.avatar} alt="Avatar"/>
        <div className="profile-name">
          <h2>{props.name}</h2>
          <p>{props.status}</p>
        </div>
    </div>
  )
}

export default ProfileInfo