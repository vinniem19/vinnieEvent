// import React, { Component } from 'react';
// import { withAuth } from '@okta/okta-react';
//  // import Header from '../Header';

// export default withAuth(class Home extends Component {
    
//     constructor(props) {
//         super(props)
//         this.state = {authenticated: null};
//         this.checkAuthentication = this.checkAuthentication.bind(this);
//             this.login = this.login.bind(this);
//             this.logout = this.logout.bind(this);
//       }
    
//       async checkAuthentication() {
//         const authenticated = await this.props.auth.isAuthenticated();
//         if (authenticated !== this.state.authenticated) {
//           this.setState({ authenticated });
//         }
//       }
    
//       async login() {
//         this.props.auth.login('/');
//       }
     
//       async logout() {
//         this.props.auth.logout('/');
//       }
     
//       async componentDidMount() {
//         this.checkAuthentication();
//       }
     
//       async componentDidUpdate() {
//         this.checkAuthentication();
//     }

    
//     render() {
//        if (this.state.authenticated === null) return null;
//        return this.state.authenticated ?
         
        
//         <button onClick={this.logout}>Logout</button> :
//         <button onClick={this.login}>Login</button>;
//     }
//    });
    