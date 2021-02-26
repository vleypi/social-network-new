import React from "react"
import './header.css'
import logo from './img/3.png'

function Header(){
    return (
      <div className="header">
          <img className="logo" src={logo} alt="Social-network"/>
          <p className="social-name">Social Network</p>
      </div>
    )
  }

export default Header