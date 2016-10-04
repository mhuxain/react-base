import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList"
import TodoStore from "./TodoStore"

export default class Container extends React.Component {

  render() {

    return (<TodoList store={TodoStore} />);
  }
}
