 import React from "react"

 function Navbar () {
    return(
        <nav className="navContainer">
            <div className="leftNavbar">
                <div className="logoContainer">
                    <a href="#"><img src="/images/logo.png" alt="logo" /></a>
                </div>
                <ul className="leftNavlinks">
                    <li className="notification">
                        <a href="#"><img src="/images/notification.png" alt="notificatin-icon" /></a>
                    </li>
                    <li className="message"><a href="#">
                     <img src="/images/message.png" alt="message-icon" />
                        </a></li>
                    <li className="video">
                        <a href="#"><img src="/images/video.png" alt="video-icon" /></a>
                    </li>
                </ul>
            </div>
            <div className="rightNavbar">
                <div className="searchBarContainer">
                    <input type="text" className="searchBar" />
                </div>
                <div className="profileContainer">
                    <img src="/images/profile-pic.png" alt="profile-pic" />
                    <span className="online">.</span>
                </div>
                
            </div>
        </nav>
    ) 
}

export default Navbar