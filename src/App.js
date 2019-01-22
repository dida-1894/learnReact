import React, { Component } from 'react';
import './App.css';


class TodoItem extends Component {
  constructor(props) {
    super(props)
  }
}

class App extends Component {

  state = {
    todoItem: [],
    text: ''
  }

   handleInput = (e) => {
    const text = e.target.value
    this.setState({
      text,
    })
  }

  addTodo = () => {
    const todoItem = {
      context: this.text,
      done: false
    }
    this.setState(state => {
      todoItem
    })
    console.log(this.state.todoItem)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TodoList</h1>
        </header>
        <input type="text" value={this.state.text} onChange={this.handleInput} />
        <button type="button" onClick={this.addTodo}>add</button>
        <br/>
      </div>
    );
  }
}

export default App;
