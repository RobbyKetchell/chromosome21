import React from 'react';
import background from "./img/chromosomes.jpeg";
import './App.css';

function App() {
  return (
    <div className={'App'} style={{ backgroundImage: `no-repeat url(${background})` }} />
  );
}

export default App;
