import React, { useState, useEffect } from "react"

import "./Hero.css"
import wallpaper from "../images/Wallpaper.jpg"

function Hero() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content)
        setAuthor(quote.author)
      })
  }, [])

  let fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content)
        setAuthor(quote.author)
      })
  }

  return (
    <div className="hero">
      <div className="hero__text border-animation">
        <span className="top-border"></span>
        <span className="top-border"></span>
        <div>
          <h1 className="hero__text--title">Hello, I'm</h1>
          <h1 className="hero__text--title">Iskander. Make</h1>
          <h1 className="hero__text--title">yourself at home</h1>
          <h3 className="hero__text--sub">
            Im a web developer ready to make your dream website
          </h3>
        </div>
      </div>
      <div className="quote">
        <h2>"{quote}"</h2>
        <small>-{author}-</small>
      </div>
      <a href="#my-projects" className="discover-btn">
        Discover
      </a>

      {/* <div className="hero__image">
        <div className="Skander"></div>
      <div className="hero__image__polygon"></div>
      </div> */}
    </div>
  )
}

export default Hero
