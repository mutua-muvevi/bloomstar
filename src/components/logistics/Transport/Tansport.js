import React from 'react'
import Lorry from '../../../assets/truck 2.jpg'

const Transport = () => {
    return (
        <div className="air">
            <div className="l-section-upper">
                <h3 className="l-section-image-h4">Transportation & Distribution</h3>
                <p className="l-section-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="l-section-content">
                <div className="l-content-content">
                    <p className="l-content-p">
                        We offer cargo transport services within East and Central Africa for containerized consignments both – 20ft and 40ft, 
                        loose cargo, cars, and specialized Transportation for Temperature controlled shipments, Out of gauge shipments
                        We have a large fleet of light and heavy commercial vehicles that are fitted with state-of-the-art electronic cargo 
                        tracking systems and are used for local and transit cargo transportation as well as distribution services in Kenya 
                        and within the East and Central Africa region.
                    </p>
                </div>
                <div className="l-content-image">
                    <img className="l-image" src={Lorry} alt="Air plane for logistics"/> 
                </div>
            </div>
        </div>
    )
}

export default Transport
