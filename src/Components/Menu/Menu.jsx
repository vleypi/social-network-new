import React from "react"
import {NavLink} from "react-router-dom"
import './menu.css'

function Menu(){
    return(
      <div className="nav">
        <ul className="nav-item">
          <NavLink to="/profile"><li className="li-nav">Мой профиль</li></NavLink>
          <NavLink to="/news"><li className="li-nav">Лента</li></NavLink>
          <NavLink to="/message"><li className="li-nav">Сообщения</li></NavLink>
          <NavLink to="/friend"><li className="li-nav">Друзья</li></NavLink>
          <NavLink to="/photo"><li className="li-nav">Фотографии</li></NavLink>
          <NavLink to="/music"><li className="li-nav">Музыка</li></NavLink>
          <NavLink to="/video"><li className="li-nav">Видео</li></NavLink>
        </ul>
      </div>
    )
}

export default Menu