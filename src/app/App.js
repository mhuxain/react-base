import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import routes from './Routes.jsx'

export default class App extends React.Component {

  render() {

    return (<Router history={hashHistory} routes={routes} />);
  }
}
