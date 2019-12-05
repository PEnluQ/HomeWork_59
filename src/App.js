import React from 'react';
import FilmList from "./containers/FilmList/FilmList";
import JokesBuild from "./containers/JokesBuild/JokesBuild";
import './App.css';

function App() {
  return (
    <div className="App">
      <FilmList/>
      <JokesBuild/>
    </div>
  );
}

export default App;
