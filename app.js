import "./styles.css";
import React from "react";
import { useState } from "react";

var showsDb = {
  Scifi: [
    {
      name: "Dark",
      rating: "4.7/5",
      description:
        "The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town's troubled history -- whether they know it or not. Rick works on a number of sci-fi gadgets and also goes on adventures across the universe that often involve his grandchildren "
    },
    {
      name: "Rick and Morty",
      rating: "4.6/5",
      description:
        "After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep to move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as happy about the family reunion."
    },
    {
      name: "The Flash",
      rating: "4.2/5",
      description:
        "Barry Allen, a forensic scientist with the Central City police force, is struck by lightning in a freak accident. When he wakes up after nine months, he discovers that he can achieve great speeds. Check out what all happens in his life after this accident."
    }
  ],
  Thriller: [
    {
      name: "Stranger Things",
      rating: "4.6/5",
      description:
        "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries. Check out the series to find out more"
    },
    {
      name: "Sherlock Holmes",
      rating: "4.8/5",
      description:
        "Sherlock Holmes is a fictional private detective created by British author Sir Arthur Conan Doyle. Referring to himself as a consulting detective in the stories, Holmes is known for his proficiency with observation, deduction, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard."
    },
    {
      name: "The Walking Dead",
      rating: "4.3/5",
      description:
        "In the wake of a zombie apocalypse, various survivors struggle to stay alive. As they search for safety and evade the undead, they are forced to grapple with rival groups and difficult choices. Catch this gripping series on Netflix to find out more."
    }
  ],
  Drama: [
    {
      name: "Breaking Bad",
      rating: "4.9/5",
      description:
        "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse. Check out what happens when his family finds out about it and the adventures that unravel in his life"
    },
    {
      name: "Mr. Robot",
      rating: "4.6/5",
      description:
        "Elliot, a cyber-security engineer suffering from anxiety, works for a corporation and hacks felons by night. Panic strikes him after Mr Robot, a cryptic anarchist, recruits him to ruin his company. Check out this journey with Elliot in finding out who Mr. Robot really is"
    },
    {
      name: "Suits",
      rating: "4.3/5",
      description:
        "Mike Ross, a talented young college dropout, is hired as an associate by Harvey Specter, one of New York's best lawyers. They must handle cases while keeping Mike's qualifications a secret. Check out this series to experience how Harvey and Mike are always on the edge for hiding Mike's secret whilst winning cases like a badass"
    }
  ]
};

var listOfGenres = Object.keys(showsDb);

export default function App() {
  var [selectedGenre, setGenre] = useState("Drama");

  function onClickHandler(selectedGenre) {
    setGenre(selectedGenre);
  }

  return (
    <div className="App">
      <h1>GoodTvShows</h1>
      <hr />
      <h2>
        {" "}
        Checkout my favorite TV shows with ratings. Select a genre to get
        started
      </h2>
      <div>
        {listOfGenres.map((genre) => {
          return (
            <button
              key={genre}
              className="buttons"
              onClick={() => onClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <div className="lowerArea">
        <ul>
          {showsDb[selectedGenre].map((shows) => (
            <li className="visit" key={shows.name}>
              <div className="name">
                {shows.name} | {shows.rating}{" "}
              </div>
              <br />
              <div>{shows.description}</div>
            </li>
          ))}
        </ul>
      </div>
      <footer className="footer">
        <hr></hr>
        <div className="footer-header">Find me on Social Media</div>

        <ul className="list-non-bullet">
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://www.linkedin.com/in/kaustubh-manglurkar-871ba0167/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://github.com/KaustubhM1997?tab=repositories"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://twitter.com/KaustubhManglu1"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-item-inline">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link footer-symbol"
              href="https://dev.to/kaustubhmanglu1/create-your-first-cli-app-4c1p"
            >
              <i className="fab fa-dev"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
