import React from 'react';
//import Logout from '../Logout/index'
function Navbar() {

    return (
<div>
    <nav>
        <div className=" amber nav-wrapper">
            {/* <a href="/" className="brand-logo">CEO</a> */}
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/search">Search</a></li>
                    <li><a href="/saved">Saved</a></li>
                    <li><a href="/catholicResources">Resources</a></li>
                    <li><a href="/catholicApps">Apps</a></li>
                    <li><a className="waves-effect waves-light btn" href="/protected">Login</a></li> 
                    {/*<li>{Logout}</li>*/}
                </ul>
        </div>
  </nav>

        
</div>
    );
}

export default Navbar;