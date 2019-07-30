import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';

// Basic component with logout button
class Logout extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  async logout() {
    this.props.auth.logout('/');
  }

  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    );
  }
};

export default withAuth(Logout);
// withAuth() makes Okta "Auth" object available as "this.props.auth"
