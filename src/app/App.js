import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
// import routes from './Routes.jsx'
import Contractors from './contractors/index.jsx'
import Contracts from './contracts/index.jsx'
import Collections from './infra/base/index.jsx'
import Home from './Home'
import NotFound from './NotFound'
import {Navbar, NavItem} from 'react-materialize';


const Navigation = () => (
  <Navbar brand='logo' left>
    <li>
        <Link to='/'>Home</Link>
    </li>
    <li>
        <Link to='/contracts'>Contracts</Link>
    </li>
    <li><Link to='/contractors'>Contractors</Link></li>
    
    
  </Navbar>
);


export default class App extends React.Component {



  render() {

    return (
      <Router>
        <div>
          
          <Navigation />
          <Match exactly pattern='/' component={Home}/>
          <Match pattern='/contracts' component={Contracts}/>
          <Match pattern='/contractors' component={Contractors}/>
          <Miss component={NotFound}/>

        </div>


      </Router>
      );
  }
}
