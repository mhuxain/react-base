import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
// import routes from './Routes.jsx'
import Contractors from './contractors/index.jsx'
import Contracts from './contracts/index.jsx'
import Collections from './infra/base/index.jsx'
import Home from './Home'
import NotFound from './NotFound'

export default class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contracts'>Contracts</Link></li>
            <li><Link to='/contractors'>Contractors</Link></li>
          </ul>
          <hr />
          <Match exactly pattern='/' component={Home}/>
          <Match pattern='/contracts' component={Contracts}/>
          <Match pattern='/contractors' component={Contractors}/>
          <Miss component={NotFound}/>

        </div>


      </Router>
      );
  }
}
