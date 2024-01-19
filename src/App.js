import React from 'react';
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Booking from "./components/Booking";

function App() {
  return (
    <div >
      <TopBar/>
      <Navbar/>
      <Hero/>
      <Activities/>
       <Booking/>
    </div>
  );
}

export default App;
