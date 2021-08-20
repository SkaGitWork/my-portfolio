import React from "react"
import "./Header.css"
import music_key from "../images/music_key.png"

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#home" className="header__heading">
          <img src={music_key} className="header__logo" alt="" />
          <h1 className="header__title">Iskander</h1>
        </a>
        <nav className="header__nav">
          <ul className="header__list">
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li>
              <a href="#my-projects">My projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
