import React from 'react'
import Ship from '../../../assets/ship 1.jpg'

const Ocean = () => {
    return (
        <div className="air">
            <div className="l-section-upper">
                <h3 className="l-section-image-h4">Sea Freight</h3>
                <p className="l-section-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="l-section-content">
                <div className="l-content-content">
                    <p className="l-content-p">
                        To give our clients the flexibility to meet their custom logistics needs at the most competitive pricing, 
                        we work with an established network of over ten different ocean carrier partners. Choose either FCL or LCL service 
                        with a wide selection of air or ocean carriers. We constantly track the shipment while it transit, 
                        so you know where it is at all times.
                    </p>
                    <ul className="l-content-ul">
                        <li className="l-content-li">
                            Complete FCL and LCL services
                        </li>
                        <li className="l-content-li">
                            FCL contract management
                        </li>
                        <li className="l-content-li">
                            LCL consolidation / deconsolidation
                        </li>
                        <li className="l-content-li">
                            Project cargo services
                        </li>
                        <li className="l-content-li">
                            Oversized cargo services
                        </li>
                        <li className="l-content-li">
                            Garment On Hanger (GOH) services;
                        </li>
                        <li className="l-content-li">
                            Insurance Services
                        </li>
                    </ul>
                </div>
                <div className="l-content-image">
                    <img className="l-image" src={Ship} alt="Air plane for logistics"/> 
                </div>
            </div>
        </div>
    )
}

export default Ocean
