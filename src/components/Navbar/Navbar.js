import React from "react";
import './navbar.scss';
import logo from '../../assets/svg/logo-cocktailz.svg';

function Navbar() {
    return(
        <header>
            <div className="logo">
                <img src={logo} width="150" height="50" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="https://google.com">Services</a>
                    </li>
                    <li>
                        <a href="https://google.com">Clients</a>
                    </li>
                    <li>
                        <a href="https://google.com">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;