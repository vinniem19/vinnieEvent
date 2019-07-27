import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Search from './components/Search';
import Saved from './pages/Saved';
import CatholicResources from './pages/CatholicResources';
import CatholicApps from './pages/CatholicApps';
// import { withAuth } from '@okta/okta-react';
import './App.css';




export default class App extends Component {
  
  // constructor(props) {
  //   super(props)
  //   this.state = {authenticated: null};
  //   this.checkAuthentication = this.checkAuthentication.bind(this);
  //       this.login = this.login.bind(this);
  //       this.logout = this.logout.bind(this);
  // }

  // async login() {
  //   this.props.auth.login('/');
  // }
 
  // async logout() {
  //   this.props.auth.logout('/');
  // }
 
  // async componentDidMount() {
  //   this.checkAuthentication();
  // }
 
  // async componentDidUpdate() {
  //   this.checkAuthentication();
  // }


  
render() {
  return(
  <Router>
    <div className="App">

    {/* user login */}
      
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/saved' component={Saved} />
      <Route exact path='/catholicResources' component={CatholicResources} />
      <Route exact path='/catholicApps' component={CatholicApps} />
      <Route exact path='/login' component={Login} />
      </Switch>
 
    </div>
    </Router>
  );

};
};

