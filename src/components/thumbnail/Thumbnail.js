import React, { Component } from 'react'

class Thumbnail extends Component {
  state = {}
  render() { 
    console.log("props", this.props);
    return (
      <img className="thumbnail"></img>
    );
  }
}
 
export default Thumbnail;
