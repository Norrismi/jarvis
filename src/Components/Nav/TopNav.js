import React from 'react';
import './topNav.css'

const TopNav = () => {
    return (

        <div className="navbar  navbar-expand-lg navbar-dark bg-dark sticky-top">
            <a className="navbar-brand mx-auto" href="/">15 Jarvis Creek Lane</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0"></ul>
            </div>
        </div>
    );
}

export default TopNav;
