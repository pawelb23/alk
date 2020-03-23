/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

import Nav from "./Nav";

const style = css`
color: green;
background-color: blue;
padding: 10px;
border: 1px solid red;

span {
color: green;
}`

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
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
