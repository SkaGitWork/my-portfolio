import React, { Component } from "react"
import "./thumbnail.css"
import { HiCursorClick } from "react-icons/hi"

class Thumbnail extends Component {
  render() {
    return (
      <a href={this.props.url}>
        <div
          className="thumbnail"
          style={{ backgroundImage: `url(${this.props.src})` }}
        >
          <HiCursorClick className="click" />
        </div>
      </a>
    )
  }
}

export default Thumbnail
