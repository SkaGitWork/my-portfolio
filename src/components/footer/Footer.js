import React, { Component } from "react"
import "./footer.css"
import { AiOutlineMail, AiFillGithub } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"

class Footer extends Component {
  state = {}
  render() {
    return (
      <footer className="footer" id="contact">
        <h1 className="footer__title">Contact me</h1>
        <ul className="contact-list">
          <li>
            <a
              href="mailto:denguezli.iskander@gmail.com"
              target="_blank"
              title="Email"
            >
              <AiOutlineMail /> <span>My E-mail</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SkaGitWork"
              target="_blank"
              title="Github"
            >
              <AiFillGithub /> <span>My Github</span>
            </a>
          </li>
          <li>
            <a href="#" title="Discord">
              <FaDiscord /> <span>My Discord</span>
            </a>
          </li>
        </ul>
        <p className="copy-right">Copyright © 2021 Denguezli Iskander</p>
      </footer>
    )
  }
}

export default Footer
