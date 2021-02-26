import React from "react"
import Post from "./Post"

function Posts(props){
  let ref = React.createRef();
  const addPost = ()=> {
    props.addPost(ref.current.value)
  }
  return(
      <div className="posts">
        <div className="new-post">
          <textarea ref={ref} for="post" name="" id="" cols="30" rows="10" placeholder="Расскажите что-нибудь..."></textarea>
          <button onClick={addPost}>Опубликовать</button>
        </div>
        {props.postData.map((el)=>(
          <Post avatar={props.avatar} name={props.name} text={el.text} />
        ))}
      </div>
  )
}

export default Posts