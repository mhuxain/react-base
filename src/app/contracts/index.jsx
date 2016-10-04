import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList"
import TodoStore from "./TodoStore"
import Contractors from "../contractors/TodoStore"

export default class Container extends React.Component {

  render() {

    return (<TodoList store={TodoStore} contractors={Contractors}/>);
  }
}
