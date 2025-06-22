import React from "react"
import Link from "../Link";
import "./Header.css";

function Header(){
    return <div className="header">
         <div className="headerContainer">
            <nav>
                <div className="logos">
                    <span className="logo logo-1">FAY</span>
                    <span className="logo logo-2">NGUYEN</span>
                </div>
                <ul id="sidemenu">
                    <li><Link class="tab"  href="#header" text="Home" /></li>
                    <li><Link class="tab"  href="#about" text="About" /></li>
                    <li><Link class="tab"  href="#experience" text="Experience" /></li>
                    <li><Link class="tab"  href="#project" text="Portfolio" /></li>
                    <li><Link class="tab"  href="#context" text="Contact" /></li>
                </ul>
            </nav>
            <div className="header-text">
                <h1>Hello, I am <span>Fay Nguyen</span><br /> from Minnesota, USA</h1>
                <p>Actively looking for New Grad position <span>SPRING 2026</span></p>
            </div>
        </div>
    </div>
}

export default Header;