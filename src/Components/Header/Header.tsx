import { NavLink } from "react-router-dom";
import GradientText from "../../ReactBitsEffect/GradientText";
import "./Header.css";

function Header(){
    return <div className="header">
         <div className="headerContainer">
            <div className="nav"  
                onClick={() => {
                    window.location.href = "/";
                }}>
                <GradientText 
                    colors={["#1A181B", "#564D65", "#3E8989", "#2CDA9D", "#05F140"]}
                    animationSpeed={3} 
                    showBorder={false} 
                    className="logo"
                    textSize="40px"
                   
                >
                    FAY NGUYEN
                </GradientText>
                <ul id="sidemenu">
                    <li><NavLink to="/about" end className="tab">ABOUT</NavLink></li>
                    <li><NavLink to="/experience" end className="tab">EXPERIENCE</NavLink></li>
                    <li><NavLink to="/project" end className="tab">PROJECT</NavLink></li>
                    <li><NavLink to="/contact" end className="tab">CONTACT</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header;