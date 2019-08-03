import React, { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
// import Search from '../components/Search';
import { withAuth } from '@okta/okta-react';
// import { Link } from 'react-router-dom';
// import { throws } from 'assert';
import './style.css'




export default withAuth(class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = {authenticated: null};
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();    
        // this.login = this.login.bind(this);
        // this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if(authenticated !== this.state.authenticated) {
      this.setState({authenticated});
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }
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

  if (this.state.authenticted === null) return null;

  const button = this.state.authenticated ?
  <button id='logout-btn' onClick={() => {this.props.auth.logout()}}>Logout</button> :
  <button id='login-btn' onClick={() => {this.props.auth.login()}}>Login</button>;

  return(
  
    <div>
      <Header />
      <Navbar />
      
      {button}
      {/* <Search /> */}
 
    </div>
    
  );

};
});

