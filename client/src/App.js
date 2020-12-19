//import react
import React from "react";

import './App.css';

//import components
import Navigation from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";

//Handles page load
export default function App() {
  return (

    <div className ="page-container">
    <div className="content-wrap">
        <Navigation />
        <Home />
        </div>
        <Footer />
      </div> 

  );
}
