import React from 'react'
import Dante from '../../../assets/dante.jpg'
import Country from '../../../assets/country.jpg'
import Alexsandrov from '../../../assets/aleksandrov.jpg'
import Malibu from '../../../assets/malibu.jpg'
import Rossano from '../../../assets/rossano.jpg'
import Magnum from '../../../assets/magnum.jpg'
import Bloom from '../../../assets/bloomflower (13).jpeg'
import Bloom2 from '../../../assets/bloomflower (17).jpeg'
// import Bloom from '../../../assets/dante.jpg'

const Flowers = () => {
    return (
        <div className="flower">
            <div className="flower-upper">
                <h3 className="flower-h3"> Fruits </h3>
                <p className="flower-p"> Lorem ipsum blah blah blah </p>
            </div>
            <div className="flower-content">
                <div className="flower-row">
                    <img className="flower-image" src={Dante} alt="dante flower"/>
                    <img className="flower-image" src={Country} alt="dante flower"/>
                    <img className="flower-image" src={Alexsandrov} alt="dante flower"/>
                    <img className="flower-image" src={Malibu} alt="dante flower"/>
                </div>
                <div className="flower-row">
                    <img className="flower-image" src={Rossano} alt="dante flower"/>
                    <img className="flower-image" src={Magnum} alt="dante flower"/>
                    <img className="flower-image" src={Bloom} alt="dante flower"/>
                    <img className="flower-image" src={Bloom2} alt="dante flower"/>
                </div>
            </div>
        </div>
    )
}

export default Flowers
