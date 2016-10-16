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


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

injectTapEventPlugin();


export class MuiLayout extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="All Broadcasts" />
              <MenuItem value={2} primaryText="All Voice" />
              <MenuItem value={3} primaryText="All Text" />
              <MenuItem value={4} primaryText="Complete Voice" />
              <MenuItem value={5} primaryText="Complete Text" />
              <MenuItem value={6} primaryText="Active Voice" />
              <MenuItem value={7} primaryText="Active Text" />
            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Options" />
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />
            <RaisedButton label="Create Broadcast" primary={true} />
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="Download" />
              <MenuItem primaryText="More Info" />
            </IconMenu>
          </ToolbarGroup>

        </Toolbar>
        <Router history={hashHistory} routes={routes} />
      </div>
    );
  }
}

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
