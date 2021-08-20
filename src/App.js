import React, { Component } from "react"
import Header from "./components/header/Header"
import './App.css'
import Hero from "./components/hero/Hero"
import Work from "./components/work/Work"
import Thumbnail from "./components/thumbnail/Thumbnail"
import AboutMe from "./components/aboutMe/AboutMe"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <main>
      <div className="first-page-container" id="home">
        <Header />
        <Hero />
      </div>
      <Work />
      <AboutMe />
      <Footer />
    </main>
  )
}

export default App
