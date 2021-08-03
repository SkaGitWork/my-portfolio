import React from "react"
import "./Header.css"
import music_key from "../images/music_key.png"

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__heading">
          <img src={music_key} className="header__logo" alt="" />
          <h1 className="header__title">Iskander</h1>
          {/* <div className="header__lines"></div> */}
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">My projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
