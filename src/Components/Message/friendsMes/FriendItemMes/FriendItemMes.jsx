import React from 'react';
import { NavLink } from 'react-router-dom';

function FriendItemMes(props) {
    return(
       <NavLink to={"/message/"+props.id}> <li>{props.name}</li></NavLink>
    )
}

export default FriendItemMes