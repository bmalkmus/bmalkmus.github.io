import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";



function NavBar() {
    const location = useLocation();
    return (
    <nav className ="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 topNav shadow-sm">
        <div className ="my-0 mr-md-auto name">
            <div className = "innerCutout">
                <p className ="nameP"> Benjamin Malkmus </p>
            </div>
        </div>
        <div className = "my-2 my-md-0 mr-md-3 navbar-expand" id="navbarNav">
            <ul className = "navbar-nav">
                <li className = "nav-item">
                    <Link
                        to="/react-portfolio/about"
                        className={location.pathname === "/about" ? "nav-link active header-link" : "nav-link header-link"}
                    >
                        About
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link
                        to="/react-portfolio/portfolio"
                        className={location.pathname === "/portfolio" ? "nav-link active header-link" : "nav-link header-link"}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link
                        to="/react-portfolio/contact"
                        className={location.pathname === "/contact" ? "nav-link active header-link" : "nav-link header-link"}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    )};

    export default NavBar;
    

