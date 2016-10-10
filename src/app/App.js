import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
// import routes from './Routes.jsx'
import Contractors from './contractors/index.jsx'
import Contracts from './contracts/index.jsx'
import Collections from './infra/base/index.jsx'
import Home from './Home'
import NotFound from './NotFound'

import { Link as MLink, Navigation} from 'react-toolbox';
// import Link as MLink from 'react-toolbox/lib/link';

const actions = [
  { label: 'Alarm', raised: true, icon: 'access_alarm'},
  { label: 'Location', raised: true, accent: true, icon: 'room'}
];

const NavigationTest = () => (
  <div>
    <Navigation type='horizontal' actions={actions} />
    <Navigation type='vertical'>
      <MLink href='http://' label='Inbox' icon='inbox' />
      <MLink href='http://' active label='Profile' icon='person' />
    </Navigation>
  </div>
);


export default class App extends React.Component {



  render() {

    return (
      <Router>
        <div>
          <NavigationTest />
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
