import React from 'react';
import '../Home';
function Navbar(props) {

    return (
<div>
    <nav>
        <div className=" amber nav-wrapper">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/protected">Search</a></li>
                    <li><a href="/saved">Saved</a></li>
                    <li><a href="/catholicResources">Resources</a></li>
                    <li><a href="/catholicApps">Apps</a></li>
                    <li>{props.button}</li>
                    
                </ul>
        </div>
  </nav>

        
</div>
    );
}

export default Navbar;