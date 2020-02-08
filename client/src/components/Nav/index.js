import React from "react";
import SmallCalendar from "../assets/smallCalendar/index.js"
import Button from "react-bootstrap/Button"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Show Up
            </a>
            <ul className='navbar-nav'>
                <form class="form-inline">
                    <div class="md-form my-0">
                        <input type="search" class="form-control ds-input" id="search-input" placeholder="Search..." />
                        <Button variant="secondary" type="submit">
                          Search
                        </Button>
                    </div>
                </form>
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
                <SmallCalendar />
                <li className='nav-item ml-auto'>
                    <a className="navbar-brand" href="/profile">
                        Profile
                    </a>
                </li>

            </ul>
        </nav>
    );
}

export default Nav;
