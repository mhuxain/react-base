import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			todoList : ["apples", "oranges", "grapes", "bananas"]
		}
	}

	create(todo) {
		this.state.todoList.push(todo)
		this.setState(this.state);
	}

  delete(todo) {

    this.state.todoList.splice(this.state.todoList.indexOf(todo), 1);
    this.setState(this.state);
  }

  render() {

    return (
      <div>
      <h1>List</h1>

      <input type="text" ref="newTodo"/>
      <button onClick={(e) => {this.create(this.refs.newTodo.value); this.refs.newTodo.value = "";}}>Create</button>
      <br />
      <ol>
      	{
      		this.state.todoList.map((todo, i) => (
      			<li key={i}>{todo}<input type="button" onClick={() => this.delete(todo) } value="X" />
      			</li>

      			))
      	}
      </ol>
      React test example list.
      </div>
    );
  }
}
