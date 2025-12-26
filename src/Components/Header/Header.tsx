import Link from "../Link/Link";
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
                    <li><Link class="tab"  href="/#/about" text="ABOUT" /></li>
                    <li><Link class="tab"  href="/#/experience" text="EXPERIENCE" /></li>
                    <li><Link class="tab"  href="/#/project" text="PROJECT" /></li>
                    <li><Link class="tab"  href="/#/contact" text="CONTACT" /></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header;