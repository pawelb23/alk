import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";

import { Input } from "antd";

import { DeleteOutlined } from "@ant-design/icons";

const style = {
  width: "200px",
  padding: "10px",
};

class App extends Component {
  state = {
    inputValue: "",
    todos: [
      {
        name: "Zad 1",
        isCompleted: false,
      },
      {
        name: "Zad 2",
        isCompleted: true,
      },
    ],
  };

  handleEnter = (event) => {
    this.state.todos.push({
      name: event.target.value,
      isCompleted: false,
    });
    console.log(this.state);
    // this.setState({ todos: this.state.todos });
    this.forceUpdate();
  };

  handleDelete = (index) => {
    this.state.todos.splice(index, 1);
    this.forceUpdate();
  };

  handleToggle = (index) => {
    this.state.todos[index].isCompleted = !this.state.todos[index].isCompleted;
    this.forceUpdate();
  };

  render() {
    return (
      <div style={style}>
        <Input placeholder="Todo name..." onPressEnter={this.handleEnter} />
        <div>
          <ul>
            {this.state.todos.map((todo, index) => (
              <li
                className={todo.isCompleted ? "is-completed" : ""}
                key={index}
              >
                {/* <li className={todo.isCompleted ? 'is-completed' : ''} key={index}>{todo.name} //Drugi sposób na to co powyżej z wraz z plikiem css App.css */}
                <input
                  type="checkbox"
                  defaultChecked={todo.isCompleted}
                  onClick={() => this.handleToggle(index)}
                />{" "}
                {todo.name}{" "}
                <DeleteOutlined
                  onClick={() => this.handleDelete(index)}
                  className="icon"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
