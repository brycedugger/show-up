import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Show Up
            </a>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className="navbar-brand" href="/">
                        Home
                    </a>
                </li>
                <li className='nav-item'>
                    <a className="navbar-brand" href="/event">
                        Event
                    </a>
                </li>
                <li className='nav-item'>
                    <a className="navbar-brand" href="/newevent">
                        New Event
                    </a>
                </li>
                <li className='nav-item'>
                    <a className="navbar-brand" href="/profile">
                        Profile
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
