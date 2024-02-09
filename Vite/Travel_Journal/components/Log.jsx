import React from "react"
import "../src/App.css"
import icon from "../images/location_icon.png"



function Log (props){
    
    return(
        <div className="logContainer">
            <div className="imageContainer">
                <img src={`../images/${props.image}`} className="picture" alt="image" />
            </div>
            <div className="detailsContainer">
                <div className="iconContainer">
                    <img src={icon} alt="icon" className="icon" />
                    <p className="country">{props.country}</p>
                    <a href="#" className="location">View on Google Maps</a>
                </div>
                <h1 className="destination">{props.destination}</h1>
                <p className="date">{props.date}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}


export default Log