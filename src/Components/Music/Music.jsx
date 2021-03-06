import React from 'react'
import Musicpost from './Misucpost'

function Music(props) {
    let ref = React.createRef();
    const addMusics = ()=>{
        props.addMusic(ref.current.value)
    }
    return(
        <div>
            <div>
                <input ref={ref}/>
                <button onClick={addMusics}>Добавить</button>
            </div>
            <div>
                {props.musicData.map((el)=>(
                    <Musicpost singer={el.singer} title={el.title}/>
                ))}
            </div>
        </div>
    )
}

export default Music