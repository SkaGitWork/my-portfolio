import React from "react"
import "./Hero.css"
import wallpaper from '../images/Wallpaper.jpg'

function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="hero__text--title">
          Hello, I'm Skander. Make yourself at home
        </h1>
        <h3 className="hero__text--sub">
          Im a web developer ready to make your dream website
        </h3>
      </div>

      {/* <div className="hero__image">
        <div className="Skander"></div>
      <div className="hero__image__polygon"></div>
      </div> */}
    </div>
  )
}

export default Hero
