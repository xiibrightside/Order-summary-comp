import React from "react";
import "./App.css";
import illustration from "./images/illustration-hero.svg";
import logo from "./images/icon-music.svg";

function App() {
  return (
    <body>
      <div className="wrapper">
        <img
          className="heroimage"
          src={illustration}
          alt="hero illustration"
        ></img>
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="details">
          <img className="logo" src={logo} alt="logo"></img>
          <span>
            Annual Plan
            <b>$59.99/year</b>
          </span>
          <a className="change" href="#0">
            Change
          </a>
        </div>
        <button className="cta1">Proceed to Payment</button>
        <button className="cta2">Cancel Order</button>
      </div>
    </body>
  );
}

export default App;
