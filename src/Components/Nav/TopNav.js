import React from 'react';
import './topNav.css'

const TopNav = () => {
    return (

        <div className="navbar  navbar-expand-lg navbar-dark bg-dark sticky-top">

            {/* <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button> */}
            <a className="navbar-brand mx-auto" href="/">15 Jarvis Creek Lane

                {/* <img className=" nav-bar_big-logo" src="15 Jarvis Creek" alt='site logo and alternative home button' /> */}
                {/* <a class="navbar-brand justify-content-center" href="#/">15 Jarvis Creek Ln.</a> */}

            </a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="/">Overview </a>
                    </li> */}

                </ul>

            </div>
        </div>
    );
}

export default TopNav;
