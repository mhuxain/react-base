import React from 'react';
import ReactDOM from 'react-dom';
import Store from "./TodoStore.js"
import TodoList from "./TodoList"

export default class Container extends React.Component {

  render() {

    return (<TodoList store={new Store} />);
  }
}
