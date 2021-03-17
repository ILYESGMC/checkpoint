import "./App.css";
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "The Grave",
      description: "serie britannique :crime, drama",
      posteUrl:
        "https://media.senscritique.com/media/000019896705/150/The_Grave.jpg",
      rate: 5,
    },
    {
      id: uuidv4(),
      title: "L'homme du président",
      description: "serie Netflix :comedy, drama",
      posteUrl:
        "https://media.senscritique.com/media/000019721325/160/L_Homme_du_president.jpg",
      rate: 4,
    },
    {
      id: uuidv4(),
      title: "Joker",
      description: "film : Action, Adventure, Fantasy, Sci-Fi",
      posteUrl:
        "https://media.senscritique.com/media/000018727645/150/Joker.jpg",
      rate: 3,
    },
    {
      id: uuidv4(),
      title: "Watchmen",
      description: " Animation, Adventure, Comedy, Family, Fantasy, Music",
      posteUrl:
        "https://media.senscritique.com/media/000019347799/150/Watchmen.jpg",
      rate: 4,
    },
    {
      id: uuidv4(),
      title: "The Boys",
      description: " Animation, Comedy, Family",
      posteUrl:
        "https://media.senscritique.com/media/000019536393/150/The_Boys.jpg",
      rate: 5,
    },
  ]);

  const [filterRate, setFilterRate] = useState(0);

  const [searchValue, setSearchValue] = useState("");

  const search = (inputValue) => {
    setSearchValue(inputValue);
  };

  const addNewMovie = (movie) => {
    setMovies(movies.concat(movie));
  };

  return (
    <div className="App">
      <Header text="Movies Library  " />
      <div>
        <Filter
          filterRate={filterRate}
          setFilterRate={setFilterRate}
          search={search}
        />
        <MovieList
          movies={movies.filter(
            (movie) =>
              movie.rate >= filterRate &&
              movie.title.toLowerCase().includes(searchValue.toLowerCase())
          )}
          addNewMovie={addNewMovie}
        />
      </div>
    </div>
  );
};

export default App;
