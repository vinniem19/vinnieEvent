import React from 'react';

function Navbar() {

    return (
<div>
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">CEO</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/search">Search Events</a></li>
                    <li><a href="/saved">Saved Events</a></li>
                    <li><a href="/catholicResources">Catholic Resources</a></li>
                </ul>
        </div>
  </nav>

        
</div>
    );
}

export default Navbar;