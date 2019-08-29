import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import OktaSignInWidget from '../../src/OktaSignInWidget';

export default withAuth(class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.state = {
      authenticated: null
    };

    this.checkAuthentication();
    // this.oktaAuth = new OktaAuth({ url: 'https://dev-169978.okta.com' });

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  onSuccess(res) {
    if (res.status === 'SUCCESS') {
   return this.props.auth.redirect({
  sessionToken: res.session.token
        // res.session.setCookieAndRedirect('https://https://dev-169978.okta.com');
   });
    }
  }

  onError(err) {
    console.log('error logging in', err);
  }


  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.oktaAuth.signIn({
  //     username: this.state.username,
  //     password: this.state.password
  //   })
  //     .then(res => this.setState({
  //       sessionToken: res.sessionToken
  //     }))
  //     .catch(err => console.log('Found an error', err));
  // }

  // handleUsernameChange(e) {
  //   this.setState({ username: e.target.value });
  // }

  // handlePasswordChange(e) {
  //   this.setState({ password: e.target.value });
  // }

  render() {
    if (this.state.autheiticated === null) return null;
    return this.state.authenticated ?
    <Redirect to={{ pathname: '/'}}/> :
    <OktaSignInWidget
      baseUrl={this.props.baseUrl}
      onSuccess={this.onSuccess}
      onError={this.onError}/>;
    // if (this.state.sessionToken) {
      // this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      // return null;
    }
  });
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className='form-input'>
//           <label>
//             Username:
//           </label>
//           <input
//             id="username" type="text"
//             value={this.state.username}
//             onChange={this.handleUsernameChange} />
//         </div>
//         <div className='form-input'>
//           <label>
//             Password:
//         </label>
//           <input
//             id="password" type="password"
//             value={this.state.password}
//             onChange={this.handlePasswordChange} />
//           <input id="submit" type="submit" value="Submit" />
//         </div>
//       </form>
//     );
//   }
// });

