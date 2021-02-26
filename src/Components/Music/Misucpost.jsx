import React from 'react'

function Musicpost(props){
    return(
        <div>
            <p>{props.singer}</p>
            <p>{props.title}</p>
        </div>
    )
}

export default Musicpost