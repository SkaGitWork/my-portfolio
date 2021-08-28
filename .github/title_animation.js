function animeLetters() {
  var textWrapperAll = document.querySelectorAll(".hero__text--title")
  console.log("table")

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
}

// .add({
//   targets: ".hero__text--title",
//   opacity: 0,
//   duration: 1000,
//   easing: "easeOutExpo",
//   delay: 1000,
// })
