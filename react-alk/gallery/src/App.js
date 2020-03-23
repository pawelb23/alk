import React, { Component } from "react";

import "./App.css";
import Footer from "./Footer";

class App extends Component {
  state = {
    currentIndex: 0,
    pictures: [
      "https://images.unsplash.com/photo-1583499076055-41653be297df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1552859951-676c58ffcc46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1583566714335-f04a4ed33a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583434820605-7373830b5a05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "https://images.unsplash.com/photo-1583356016370-fce4ca860a8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    ]
  };

  handleClick = index => {
    this.setState({ currentIndex: index });
  };

  next = () => {
    if (this.state.currentIndex < this.state.pictures.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };

  prev = () => {
    if (this.state.currentIndex > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
  };

  render() {
    return (
      <>
        {this.state.currentIndex === 0 && <div>Jestem na początku</div>}
        {this.state.currentIndex === this.state.pictures.length - 1 && (
          <div>Jestem na końcu</div>
        )}
        <div className="preview">
          <img src={this.state.pictures[this.state.currentIndex]} />
          {this.state.currentIndex !== 0 && (
            <button onClick={this.prev}>prev</button>
          )}
          {this.state.currentIndex !== this.state.pictures.length - 1 && (
            <button onClick={this.next}>next</button>
          )}
        </div>
        <div className="thumbs">
          {this.state.pictures.map((url, index) => (
            <img key={index} onClick={() => this.handleClick(index)} src={url} />
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
