import React from "react"
import avatar from "../../img/2.png"
import Posts from "./posts/Posts"
import ProfileInfo from "./profile-info/ProfileInfo"
import './profile.css'
import {addPost,onPostChange} from '../../state/state'

function Profile(props){
  return(
    <div className="profile">
      <ProfileInfo avatar={avatar} name={props.name} status={props.status}/>
      <Posts avatar={avatar} name={props.name} postData={props.postData} addPost={addPost} postText={props.postText} onPostChange={onPostChange}/>
    </div>
  )
}

export default Profile