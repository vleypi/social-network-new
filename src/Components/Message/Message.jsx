import React from "react"
import avatar from "../../img/2.png"
import Dialogs from "./dialogs/dialogs"
import FriendsMes from "./friendsMes/friendsMes"
import './Message.css'
import {addMes} from '../../state/state'

function Message(props){
    console.log(props)
    return (
        <div className="message">
            <Dialogs messageData={props.messageData} addMes={addMes}/>
            <FriendsMes friendsData={props.friendsData}/>
        </div>
    )
}

export default Message