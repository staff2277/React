import React from "react";
import homeIcon from './home.png';
import signinIcon from './sign-in.png';
import aboutIcon from './about.png';



const Navbar = () => {
    return(
    <ul className="lists">
        <a href="#"><li id="home">Home{""}<img src={homeIcon} alt="home icon"></img></li></a>
        <a href="#"><li id="signIn">Sign-In{""}<img src={signinIcon} alt="sign-in"></img></li></a>
        <a href="#"><li id="aboutUs">About-Us{""} <img src={aboutIcon} alt="about"></img></li></a>
        
    </ul>

    )

};

export default Navbar;