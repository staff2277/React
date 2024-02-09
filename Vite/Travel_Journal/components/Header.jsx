import React from "react"
import image1 from "../images/Globe.png"
import "../src/App.css"


function Header (){
    return(
        <div className="headerContainer">
            <img src={image1} alt="globe_pic" className="globePic"/>
            <p className="headerText">My Travel Journal</p>
        </div>
    )
}


export default Header