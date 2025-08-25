import React from "react"
import Link from "../Link/Link";
import GradientText from "../../ReactBitsEffect/GradientText";
import "./Header.css";

function Header(){
    return <div className="header">
         <div className="headerContainer">
            <div className="nav">
                <GradientText 
                    colors={["#22577A", "#38A3A5", "#C7F9CC", "#38A3A5", "#22577A"]}
                    animationSpeed={15} 
                    showBorder={false} 
                    className="logo"
                    textSize="30px"
                >
                    FAY NGUYEN
                </GradientText>
                <ul id="sidemenu">
                    <li><Link class="tab"  href="/" text="HOME" /></li>
                    <li><Link class="tab"  href="/about" text="ABOUT" /></li>
                    <li><Link class="tab"  href="/experience" text="EXPERIENCE" /></li>
                    <li><Link class="tab"  href="/project" text="PROJECT" /></li>
                    <li><Link class="tab"  href="/contact" text="CONTACT" /></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header;