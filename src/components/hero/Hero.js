import React, { Component, useState, useEffect } from "react"
import anime from "animejs/lib/anime.es.js"
import "./Hero.css"

 function animeLetters() {
   let textWrapperAll = document.querySelectorAll(".hero__text--title")
   let index = 0

   for (index in textWrapperAll) {
     const textWrapper = textWrapperAll[index]
     try {
       textWrapper.innerHTML = textWrapper.textContent.replace(
         /\S/g,
         "<span class='letter'>$&</span>"
       )
     } catch (error) {}

     anime
       .timeline({ loop: false })

       .add({
         targets: ".letter",
         translateY: ["1.1em", 0],
         translateX: ["0.55em", 0],
         translateZ: 0,
         rotateZ: [180, 0],
         duration: 750,
         easing: "easeOutExpo",
         delay: (el, i) => 50 * i,
       })
   }
 }

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

    animeLetters()
  }

  render() {
    return (
      <>
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

        <div className="hero-wave">
        </div>
      </>
    )
  }
}

export default Hero
