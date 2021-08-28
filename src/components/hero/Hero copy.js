import React, { Component, useState, useEffect } from "react"
import animeLetters from 
import './Hero.css'

class Hero extends Component {
  state = {
    quote: "",
    author: "",
  }

  
  componentDidMount() {
    fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((quote) => {
      this.setState({ quote: quote.content })
      this.setState({ author: quote.author })
    })
    
    scriptLoaded() {
      animeLetters()
    }
    const script = document.createElement("script")
    script.src = "/static/libs/title_animation.js"
    script.async = true
    script.onload = () => this.scriptLoaded()

    document.body.appendChild(script)
  }

  render() {
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
          <h2>"{this.state.quote}"</h2>
          <small>-{this.state.author}-</small>
        </div>
        <a href="#my-projects" className="discover-btn">
          Discover
        </a>
      </div>
    )
  }
}

export default Hero
