import React from 'react';

function DialogsBox(props) {
    return(
        <div className="dialogs-box">
            {props.messageData.map((m)=>(
                <p className={m.isMine ?"mineMes":"friendMes"}>{m.text}</p>
            ))}
        </div>
    )
}

export default DialogsBox