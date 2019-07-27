import React from 'react';

function Navbar() {

    return (
<div>
    <nav>
        <div className="nav-wrapper">
            {/* <a href="/" className="brand-logo">CEO</a> */}
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/search">Search</a></li>
                    <li><a href="/saved">Saved</a></li>
                    <li><a href="/catholicResources">Resources</a></li>
                    <li><a href="/catholicApps">Apps</a></li>
                    <li><a className="waves-effect waves-light btn" href="/login">Login</a></li>
                </ul>
        </div>
  </nav>

        
</div>
    );
}

export default Navbar;