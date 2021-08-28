import React, { Component } from "react"
import "./aboutMe.css"

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me-bg show-on-scroll">
        <div className="anchor" id="about-me"></div>
        <div className="about-me__custom-shape about-me__custom-shape--top"></div>
        <section className="about-me-section">
          <h1 className="about-me-section__title title">About Iskander</h1>
          <div className="about-me about-me__text-container slide-in">
            <h1 className="about-me__title">About me</h1>
            <p className="about-me__text">
              My name is Iskander, im 21 years old and I live in Tunisia, my
              dream is to become a musician, meanwhile, I like creating projects
              in the web. I started my learning journey in Summer 2021 and I
              wish to help people creating their website.
            </p>
          </div>
          <div className="skills about-me__text-container slide-in">
            <h1 className="about-me__title">My skills</h1>
            <p className="about-me__text">
              I started with Python building algorithms then I decided to turn
              to the web. I learned
              <span> HTML5, CSS3, SASS, Javascript, Jquery and React</span>
            </p>
          </div>
        </section>
        <div className="about-me__custom-shape about-me__custom-shape--bot"></div>
      </div>
    )
  }
}

export default AboutMe
