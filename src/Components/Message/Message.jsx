import React from "react"
import avatar from "../../img/2.png"
import Dialogs from "./dialogs/dialogs"
import FriendsMes from "./friendsMes/friendsMes"
import './Message.css'

function Message(props){
    return (
        <div className="message">
            <Dialogs messageData={props.messageData} addMes={props.addMes} messageText={props.messageText} onMessageChange={props.onMessageChange}/>
            <FriendsMes friendsData={props.friendsData}/>
        </div>
    )
}

export default Message