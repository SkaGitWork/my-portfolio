import React, { Component } from "react"
import Header from "./components/header/Header"
import './App.css'
import Hero from "./components/hero/Hero"
import Work from "./components/work/Work"

function App() {
  return (
    <main className="container">
      <Header />
      <Hero />
      <Work />
    </main>
  )
}

export default App
