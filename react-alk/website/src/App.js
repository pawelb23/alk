/** @jsx jsx */
// import React from "react";
import { css, jsx } from "@emotion/core";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Redirect from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
// import Button from "./Contact";

const style = css`
  color: green;
  background-color: rgba(97, 218, 251, 0.5);
  padding: 10px;
  border: 3px solid #282c34;

  span {
    color: green;
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
            <Route path="/contact" component={Contact} />
            <Route component={Error}></Route>
          </Switch>
        </section>
      </BrowserRouter>
      <div css={style}>
        <h1>tekst w h1</h1>
        <span>tekst w spanie</span>
        {/* <Button update={this.update.bind(this)} /> */}
      </div>
    </div>
  );
};

export default App;
