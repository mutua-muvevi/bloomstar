import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faComment, faHome, faSun, faTruckMoving } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-content">
                <div className="nav-logo">
                    <p>LOGO</p>
                </div>
                <div className="nav-ul">
                    <NavLink className="navlink" to="/"> <FontAwesomeIcon icon={faHome} /> Home</NavLink>
                    <NavLink className="navlink" to="/about"> <FontAwesomeIcon icon={faAddressCard}/> About</NavLink>
                    <NavLink className="navlink" to="/logistics"> <FontAwesomeIcon icon={faTruckMoving}/> Logistics</NavLink>
                    <NavLink className="navlink" to="/plants"> <FontAwesomeIcon icon={faSun}/> Plants</NavLink>
                    <NavLink className="navlink" to="/contact"><FontAwesomeIcon icon={faComment}/> Contact</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
