import "./styles.css";
import React from "react";
import { useState } from "react";

var showsDb = {
  Scifi: [
    { name: "Dark", rating: "4.7/5" },
    { name: "Rick and Morty", rating: "4.6/5" }
  ],
  Thriller: [
    { name: "Stranger Things", rating: "4.6/5" },
    { name: "Sherlock Holmes", rating: "4.8/5" }
  ],
  Drama: [
    { name: "Breaking Bad", rating: "4.9/5" },
    { name: "Suits", rating: "4.5/5" }
  ]
};

var listOfGenres = Object.keys(showsDb);

export default function App() {
  var [selectedGenre, setGenre] = useState("Scifi");

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
              <div className="name">{shows.name} </div>
              <div>{shows.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
