import React from 'react';
import FilmList from "./containers/FilmList/FilmList";
import Jokes from "./containers/Jokes/Jokes";
import './App.css';

function App() {
  return (
    <div className="App">
      <FilmList/>
      <Jokes/>
    </div>
  );
}

export default App;
