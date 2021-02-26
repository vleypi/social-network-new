import React from 'react';
import { NavLink } from 'react-router-dom';
import './FriendList.css'

function FriendsListItem(props){
    return(
        <div className="link-to">
            <NavLink to={"/"} className="profilefriend">{props.name}</NavLink>
            <NavLink to={"/message/"+props.id} className="messagelinkfriend">Написать...</NavLink>
        </div>
    )
}

export default FriendsListItem