import React from 'react'
import FriendsListItem from './friends'

function FriendList(props){
    return(
        <div className="friendlist">
            <h2>Друзья</h2>
            <div className="friends-list">
                {props.friendsData.map((el)=>(
                    <FriendsListItem id={el.id}  name={el.name}/>
                ))}
            </div>  
        </div>
    )
}

export default FriendList