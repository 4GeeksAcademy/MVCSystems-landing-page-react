import React from "react";
import Navbar from "./navbar";
import Jumbotton from "./jumbotton";
import Gridcards from "./gridcards";
import Footer from "./footer";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div id="app">
      <Navbar />
      <div className="container">
        <Jumbotton />
        <Gridcards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
