import React from 'react';
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";

function App() {
  return (
    <div >
      <TopBar/>
      <Navbar/>
      <Hero/>
      <Activities/>
    </div>
  );
}

export default App;
