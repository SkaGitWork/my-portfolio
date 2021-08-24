import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

/* ------------------------------ Sticky header ----------------------------- */
window.onscroll = function () {
  stickyHeader()
}

var header = document.getElementsByClassName("header")[0]
var musicLogo = document.getElementsByClassName("header__logo")[0]
var startSticky = document.getElementById("my-projects")

var sticky = startSticky.offsetTop

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky")
    musicLogo.classList.add("header__logo--white")
  } else {
    header.classList.remove("sticky")
    musicLogo.classList.remove("header__logo--white")
  }
}

/* ----------------------------- Show on scroll ----------------------------- */

const options = { threshold: 0 }

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add("is-visible")
      observer.unobserve(entry.target)
    }
  })
}, options)

const targets = document.querySelectorAll(".show-on-scroll")
targets.forEach(function (target) {
  appearOnScroll.observe(target)
})


/* -------------------------- Show Letter by letter ------------------------- */
var textWrapperAll = document.querySelectorAll(".hero__text--title")

for (index in textWrapperAll) {
  const textWrapper = textWrapperAll[index]
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  )

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

// .add({
//   targets: ".hero__text--title",
//   opacity: 0,
//   duration: 1000,
//   easing: "easeOutExpo",
//   delay: 1000,
// })

