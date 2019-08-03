

import React, { Component } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';

export default withAuth(class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      username: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: 'https://dev-211305.okta.com' });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }))
      .catch(err => console.log('Found an error', err));
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div class='form-input'>
          <label>
            Username:
          </label>
          <input
            id="username" type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange} />
        </div>
        <div class='form-input'>
          <label>
            Password:
        </label>
          <input
            id="password" type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange} />
          <input id="submit" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
});

// Basic component with logout button
// class Logout extends Component {
//   constructor(props) {
//     super(props);
//     this.logout = this.logout.bind(this);
//   }

//   async logout() {
//     this.props.auth.logout('/');
//   }

//   render() {
//     return (
//       <button onClick={this.login}>Logout</button>
//     );
//   }
// };

// withAuth() makes Okta "Auth" object available as "this.props.auth"
// Logout = withAuth(Logout);