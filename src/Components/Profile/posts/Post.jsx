import React from "react"

function Post(props){
  return(
    <div className="post">
      <div className="post-name">
        <img src={props.avatar} alt="Avatar"/>
        <p>{props.name}</p>
      </div>
      <div className="post-text">
        <p className="text-post" id={props.id}>{props.text}</p>
      </div>
    </div>
  )
}



export default Post