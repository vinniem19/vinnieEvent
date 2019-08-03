import React, { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { withAuth } from '@okta/okta-react';
import './style.css'




export default withAuth(class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = {authenticated: null};
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();    
       
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


  
render() {

  if (this.state.authenticted === null) return null;

  const button = this.state.authenticated ?
  <button id='logout-btn' onClick={() => {this.props.auth.logout()}}>Logout</button> :
  <button id='login-btn' onClick={() => {this.props.auth.login()}}>Login</button>;

  return(
  
    <div>
      <Header />
      <Navbar />
      <h1>Press Search on the navigation to begin.</h1>
      {button}
 
    </div>
    
  );

};
});

