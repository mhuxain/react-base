import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList"
import Contracts from "./TodoStore"

export default class Container extends React.Component {

  render() {

    return (<TodoList store={new Contracts}/>);
  }
}
