import React from "react"
import DialogsBox from "./DialogsBox"

function Dialogs(props) {
    let ref = React.createRef();
    const addMes = (e)=>{
        props.addMes(ref.current.value);
        ref.current.value = '';
        console.log(e)
    }
    const onMessageChange = ()=>{
        props.onMessageChange(ref.current.value)
    }
    return(
        <div className="dialogs">
            <DialogsBox messageData={props.messageData}/>
            <div className="push-message">
                <textarea ref={ref}  value={props.messageText} onChange={onMessageChange} name="" id="" cols="30" rows="10" placeholder="Напишите что-нибудь..."></textarea>
                <button onClick={addMes} >Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs