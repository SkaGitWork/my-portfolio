import React from "react"

// Import images
import toDoApp from "../images/toDoApp.webp"
import rockPaperScissors from "../images/rockPaperScissors.webp"
import calculatorApp from "../images/calculatorApp.webp"
import launchCountDownApp from "../images/launchCountDownApp.webp"
import columnPreviewCardApp from "../images/3columnPreviewCardApp.webp"
import statsPreviewCardComponent from "../images/statsPreviewCardComponent.webp"
import sunnySieAgencyLandingPage from "../images/sunnySieAgencyLandingPage.webp"

export const projects = {
  project_1: {
    name: "To Do App",
    imageSrc: toDoApp,
    urlLive: "https://skagitwork.github.io/Todo-app-website/",
    urlSite: "https://github.com/SkaGitWork/Todo-app-website",
    text: (
      <React.Fragment>
        The app contains a light and dark mode filters to display only completed
        or in progress to-do and finally a "drag and drop" feature to rearrange
        your to-do. This project was fun to create, i built it with
        <span> </span>
        <strong>
          Semantic HTML5 markup Flexbox CSS variables Vanilla Js. <br></br>
        </strong>
        It taught me a lot of Javascript especially Js Dictionaries
      </React.Fragment>
    ),
    infos: ["Front end mentor", "1 Week"],
  },
  project_2: {
    name: "Rock Paper Scissors",
    imageSrc: rockPaperScissors,
    urlLive: "https://skagitwork.github.io/Rock-Paper-Scissors-game-Website/",
    urlSite: "https://github.com/SkaGitWork/Rock-Paper-Scissors-game-Website",
    text: (
      <React.Fragment>
        Probably the toughest one, it's a Rock Paper Scissors game, you choose
        what you want to play, then after a moment, you see what the house
        picked. The house picked is random so it's the best way to test your
        luck.
        <br></br> This was really hard to build due to the complex structure of
        the page. I'm quite satisfied of the result but there is still room for
        improvement. I learned animation ::after and ::before for building
        complex shapes Grid. it was built<span> </span>
        <strong>
          {" "}
          Semantic HTML5 markup Flexbox CSS Grid Basic Js animation.{" "}
        </strong>
      </React.Fragment>
    ),
    infos: ["Front end mentor", "2 Week"],
  },
  project_3: {
    name: "Calculator",
    imageSrc: calculatorApp,
    urlLive: "https://skagitwork.github.io/",
    urlSite: "https://github.com/SkaGitWork/SkaGitWork.github.io",
    text: (
      <React.Fragment>
        This the first App i created when i got back to web development.
        Although it's a simple project, it was quite challenging. I had to
        remember the basic stuff. This Calculator contains 3 themes and the
        basic arithmetic operation. I learned<span> </span>
        <strong>CSS variables and quite bit of animation.</strong>
      </React.Fragment>
    ),
    infos: ["Front end mentor", "3 days"],
  },
  project_4: {
    name: "Launch Count Down App",
    imageSrc: launchCountDownApp,
    urlSite:
      "https://github.com/SkaGitWork/Launch-countdown-timer-Website-Challenge",
    urlLive:
      "https://skagitwork.github.io/Launch-countdown-timer-Website-Challenge",
    text: (
      <React.Fragment>
        I never expected to get such result from a simple countdown. As you can
        see, it's a web countdown, i can change the time that it starts. But the
        tough part was to animate each block. It took many trial and error to
        get this result. I learned <span> </span>
        <strong>Sass and animation.</strong>
      </React.Fragment>
    ),
    infos: ["Front end mentor", "3 Days"],
  },
  project_5: {
    name: "3-Column Preview Card",
    imageSrc: columnPreviewCardApp,
    urlLive:
      "https://skagitwork.github.io/3-column-preview-card-component--Website/",
    urlSite:
      "https://github.com/SkaGitWork/3-column-preview-card-component--Website",
    text: (
      <React.Fragment>
        This project was an easy one, it a good way to practice layout and
        responsiveness. But i see a plenty of feature to add to make thing
        interesting.
      </React.Fragment>
    ),
    infos: ["Front end mentor", "3 hours"],
  },
  project_6: {
    name: "Stats preview card component",
    imageSrc: statsPreviewCardComponent,
    urlLive:
      "https://skagitwork.github.io/Stats-preview-card-component-Website/",
    urlSite:
      "https://github.com/SkaGitWork/Stats-preview-card-component-Website",
    text: (
      <React.Fragment>
        A simple frontend project, maybe i can add animation to the preview
        card. I learned <span> </span>
        <span>Css filter.</span>
      </React.Fragment>
    ),
    infos: ["Front end mentor", "1 day"],
  },
  project_7: {
    name: "Sunnyside agency landing page",
    imageSrc: sunnySieAgencyLandingPage,
    urlSite: "https://github.com/SkaGitWork/Sunnyside-agency-landing-page",
    urlLive: "https://skagitwork.github.io/Sunnyside-agency-landing-page/",
    text: (
      <React.Fragment>
        My first landing page, or my second project. It a landing page for both mobile and desktop. It was hard to work on the layout while having
        image position to respect. But i learned a lot from it especially <span> </span>
        <strong>
          responsive website and media queries. <br></br>
        </strong>
      </React.Fragment>
    ),
    infos: ["Front end mentor", "5 days"],
  },
}
