import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Security, SecureRoute, ImplicitCallback} from '@okta/okta-react';
import Home from './pages/Home';
import Login from './pages/Login';
import Protected from './components/Protected';
import Search from './components/Search';
import Saved from './pages/Saved';
import CatholicResources from './pages/CatholicResources';
import CatholicApps from './pages/CatholicApps';
// import { withAuth } from '@okta/okta-react';
import './App.css';

function onAuthRequired({history}) {
  history.push('./login');
}


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
    <Security issuer='https://dev-169978.okta.com/oauth2/default'
    client_id='0oa13oike68NVDIRD357'
    redirect_uri={window.location.origin + '/implicit/callback'}
    onAuthRequired={onAuthRequired} >
      
      <Switch>
      <Route exact path='/' component={Home} />
      <SecureRoute path='/protected' component={Protected} />
      <Route path='/login' render={() => <Login baseUrl='https://dev-211305.okta.com}' /> } />      
      <Route path='/implicit/callback' component={ImplicitCallback} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/saved' component={Saved} />
      <Route exact path='/catholicResources' component={CatholicResources} />
      <Route exact path='/catholicApps' component={CatholicApps} />
     </Switch>
      </Security>
    </div>
    </Router>
  );

};
};

