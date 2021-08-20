import React, { Component } from "react"
import "./aboutMe.css"

class AboutMe extends Component {
  state = {}
  render() {
    return (
      <>
        <section className="about-me-section show-on-scroll" id="about-me">
        <h1 className="about-me-section__title">
          About Iskander
        </h1>
          <div className="about-me about-me--container slide-in">
            <h1 className="about-me__title">About me</h1>
            <p className="about-me__text">
              My name is Iskander, im 21 years old and I live in Tunisia, my
              dream is to become a musician, meanwhile, I like creating projects
              in the web. I started my learning journey in Summer 2021 and I
              wish to help people creating their website.
            </p>
          </div>
          <div className="skills about-me--container slide-in">
            <h1 className="about-me__title">My skills</h1>
            <p className="about-me__text">
              I started with Python building algorithms then I decided to turn
              to the web. I learned
              <span> HTML5, CSS3, SASS, Javascript, Jquery and React</span>
            </p>
          </div>
        </section>
      </>
    )
  }
}

export default AboutMe