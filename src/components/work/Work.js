import React, { Component } from "react"
import "./work.css"

import Project from "../project/Project"
import { projects } from "./workData"

class work extends Component {
  state = {
    projectKeys: Object.keys(projects),
  }

  // Render my projects
  renderProjects() {
    var all = []
    for (var key in projects) {
      var project = projects[key]

      all.push(
        <Project
          key={project.name}
          name={project.name}
          imageSrc={project.imageSrc}
          urlLive={project.urlLive}
          urlSite={project.urlSite}
          text={project.text}
          infos={project.infos}
        />
      )
    }
    return all
  }

  render() {
    return (
      <div className="work" id="my-projects">
        

        <h1 className="work__title" id="startSticky">
          My latest work
        </h1>
        {this.renderProjects()}
        <h1 className="work__title work__title--progress">Work in progress</h1>
      </div>
    )
  }
}

export default work
