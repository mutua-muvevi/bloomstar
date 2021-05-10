import React from 'react'
import './About.css'
import AboutBanner from './AboutBanner/AboutBanner'
import AboutGallery from './AboutGallery/AboutGallery'
import AboutRightImage from './AboutRightImage/AboutRightImage'
import Map from './Map/Map'
import Statements from './Statements/Statements'

const About = () => {
    return (
        <div className="about">
            <AboutBanner/>
            <AboutRightImage/>
            <Statements/>
            <AboutGallery/>
            <Map/>
        </div>
    )
}

export default About
