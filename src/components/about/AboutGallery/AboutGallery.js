import React from 'react'
import './AboutGallery.css'
import FlwOne from '../../../assets/malibu.jpg'
import FlwTwo from '../../../assets/bloomflower (17).jpeg'
import FlwThree from '../../../assets/bloomflower (2).jpeg'
import FlwFour from '../../../assets/bloomflower (16).jpeg'
import FlwFive from '../../../assets/bloomflower (18).jpeg'
import FlwSix from '../../../assets/rossano.jpg'
import FlwSeven from '../../../assets/aleksandrov.jpg'
import Magnum from '../../../assets/magnum.jpg'
import Lilly from '../../../assets/lily.jpeg'

const AboutGallery = () => {
    return (
        <div className="about-gallery">
            <div className="about-gallery-upper">
                <h2 className="about-gallery-upper-h3">Gallery</h2>
                <p className="about-gallery-upper-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

            <div className="about-galleries">
                <div className="about-gallery-row">
                    <img className="gallery-image" src={FlwOne} alt="Flower"/>
                    <img className="gallery-image" src={FlwTwo} alt="Flower"/>
                    <img className="gallery-image" src={FlwThree} alt="Flower"/>
                </div>
                <div className="about-gallery-row">
                    <img className="gallery-image" src={FlwFour} alt="Flower"/>
                    <img className="gallery-image" src={FlwFive} alt="Flower"/>
                    <img className="gallery-image" src={FlwSix} alt="Flower"/>
                </div>

                <div className="about-gallery-row">
                    <img className="gallery-image" src={FlwSeven} alt="Flower"/>
                    <img className="gallery-image" src={Magnum} alt="Flower"/>
                    <img className="gallery-image" src={Lilly} alt="Flower"/>
                </div>
            </div>
        </div>
    )
}

export default AboutGallery
