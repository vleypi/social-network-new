import React from "react"
import FriendItemMes from './FriendItemMes/FriendItemMes' 

function FriendsMes(props) {
    return(
        <div className="freinds">
            <ul>
                {props.friendsData.map((el)=>(
                    <FriendItemMes id={el.id}  name={el.name}/>
                ))}
            </ul>  
        </div>
    )
}

export default FriendsMes
