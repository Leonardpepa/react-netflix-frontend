import React from 'react';
import '../css/App.css';
import HomeScreen from "./HomeScreen";
require('dotenv').config();

  function App() {
  return (
    <div className="App">
      <HomeScreen />
    </div>
  );
}

export default App;
