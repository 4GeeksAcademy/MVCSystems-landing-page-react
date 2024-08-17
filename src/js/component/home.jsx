import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Gridcards from "./gridcards";
import Footer from "./footer";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <div id="app">
        <div className="container">
          <Jumbotron />
          <Gridcards />
        </div>
        <Footer />
      </div>
      <Footer />
    </>
  );
};

export default Home;
