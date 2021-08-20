import React, { Component } from "react"
import Thumbnail from "../thumbnail/Thumbnail"

import './project.css'

class Project extends Component {
  render() {
    return (
      <div className="project">
        <h1 className="project__title">{this.props.name} </h1>
        <Thumbnail src={this.props.imageSrc} url={this.props.urlLive} />
        <p className="project__text">{this.props.text}</p>
        <div className="project__info">
          <ul className="project__info__list">
            <li>Design</li>
            <li>{this.props.infos[0]}</li>
          </ul>
          <ul className="project__info__list">
            <li>Time took to build</li>
            <li>{this.props.infos[1]}</li>
          </ul>
          <ul className="project__info__list">
            <li>Links</li>
            <li>
              <a href={this.props.urlSite}>Source code</a> <span> / </span>
              <a href={this.props.urlLive}>Live</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Project
