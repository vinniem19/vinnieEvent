import React, { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
// import { withAuth } from '@okta/okta-react';
// import './App.css';




export default class Home extends Component {
  
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
  
    <div className="Home">

    {/* user login */}
      <Header />
      <Navbar />
      <Search />
 
    </div>
    
  );

};
};

