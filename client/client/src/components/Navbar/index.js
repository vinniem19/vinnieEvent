import React from 'react';

function Navbar() {

    return (
<div>
    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">CEO</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/events">Events</a></li>
                </ul>
        </div>
  </nav>

        
</div>
    );
}

export default Navbar;