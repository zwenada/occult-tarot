import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Card from "./components/Card";
import Outline from "./components/Outline";
import Packages from "./components/Packages";
import DailyMessage from "./components/DailyMessage";
import AboutUs from "./components/AboutUs";
import TarotCardPull from "./components/TarotCardPull";

const Home = () => (
  <>
    <Intro />
    <Card />
  </>
);

const About = () => (
  <div>
    <>
      <AboutUs />
      <TarotCardPull />
    </>
  </div>
);

const Services = () => (
  <div>
    <>
      <DailyMessage />
      <Packages />
    </>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Outline />
    </Router>
  );
};

export default App;
