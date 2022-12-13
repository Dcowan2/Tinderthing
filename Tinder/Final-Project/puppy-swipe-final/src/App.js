import React from 'react';
import './App.css';
import Header from './Header';
import PuppyCards from './PuppyCards';
import SwipeButtons from './SwipeButtons';


function App() {
  return (
    //bem claa naming convention
    <div className="app">

      <Header/>
      <PuppyCards/>
      <SwipeButtons/>

    </div>
  );
}

export default App;
