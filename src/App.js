import React, { Component } from 'react';
import './App.css';


const TodoItem = (props) => {
    const handleChange = (e) => {
        console.log(e.target)
        this.props.finished(e)
    }
    return (
        <li>
            <input type="checkbox" checked={props.item.done} onClick={() => this.props.finished(props.item)}/>
            <span>{props.item.context}</span>
        </li>
    )
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
    const joined = this.state.todoItem.concat({
        id: this.state.todoItem.length + 1,
        context: this.state.text,
        done: false,
    })
    this.setState({todoItem: joined})
  }

  finished = (item) => {
      console.log("oooo")
      // item.done = !done
      // this.setState({todoItem: [...this.state.todoItem, item]})
      console.log(item)
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
          {this.state.todoItem.map(item => <TodoItem key={item.id} handleFinished={(item) => this.finished(item)} item={item}></TodoItem>)}
      </div>
    );
  }
}

export default App;
