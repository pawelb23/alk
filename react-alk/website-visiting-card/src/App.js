/** @jsx jsx */
// import React from "react";
import { css, jsx } from "@emotion/core";
import "./App.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Map from "./Map";
import Contact from "./Contact";
import Error from "./Error";

import Nav from "./Nav";

const style = css`
  color: green;
  background-color: rgba(97, 218, 251, 0.5);
  padding: 10px;
  border: 3px solid #282c34;

  span {
    color: rgba(131, 129, 42, 0.875);
    font-size: 20px;
  }
`;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/map" component={Map} />
            <Route path="/contact" component={Contact} />
            <Route component={Error}></Route>
          </Switch>
        </section>
      </BrowserRouter>
      <div css={style}>
        <h1>tekst w h1</h1>
        <span>tekst w spanie</span>
      </div>
    </div>
  );
};

export default App;
