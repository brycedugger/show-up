import React from "react";
import DatePicker from "react-date-picker";
import SmallCalendar from "../assets/smallCalendar/index.js"

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
                <DatePicker />
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
