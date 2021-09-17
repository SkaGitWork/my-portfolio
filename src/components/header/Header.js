import React from "react"
import "./Header.css"
import music_key from "../images/music_key.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineArrowRight } from "react-icons/ai"

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#home" className="header__heading">
          <img src={music_key} className="header__logo" alt="" />
          <h1 className="header__title">Iskander</h1>
        </a>
        <input type="checkbox" id="js-hamburger" />
        <label htmlFor="js-hamburger" className="hamburger">
          <GiHamburgerMenu />
        </label>
        <ul className="header__nav">
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about-me">About me</a>
          </li>
          <li>
            <a href="#my-projects">My projects</a>
          </li>
          <label htmlFor="js-hamburger" className="dismiss-arrow">
            <AiOutlineArrowRight />
          </label>
        </ul>
      </div>
    </header>
  )
}

export default Header
