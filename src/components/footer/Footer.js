import { faTruckMoving, faMapMarker, faPhoneSquareAlt, faEnvelopeSquare, faClock} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="the-footer">
                <div className="footer-left">
                    <div className="footer-logo">
                        <FontAwesomeIcon icon={faTruckMoving} size="4x"/> 
                        <h3 className="footer-h3">BloomStar</h3>
                    </div>
                    <div className="footer-socials">
                        <FontAwesomeIcon icon={faFacebookSquare} color="#4267B2" size="3x" />
                        <FontAwesomeIcon icon={faTwitterSquare} color="#1DA1F2" size="3x" />
                        <FontAwesomeIcon icon={faInstagramSquare} color="#FD1D1D" size="3x" />
                        <FontAwesomeIcon icon={faLinkedinIn} color="#0077b5" size="3x" />
                    </div>
                    <p className="footer-logo-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                </div><hr/>

                <div className="footer-middle">
                    <h3 className="footer-h3">Get in touch</h3>
                    <ul className="footer-middle-ul">
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faMapMarker}/> Jommo Kenyatta International Airport, Nairobi Kenya</li>
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faPhoneSquareAlt} /> +254 712 345 678</li>
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faPhoneSquareAlt} /> +254 712 345 678</li>
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faEnvelopeSquare} /> bloomstar@gmail.com</li>
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faEnvelopeSquare} /> info@bloomstar.com</li>
                        <li className="footer-middle-li"> <FontAwesomeIcon icon={faClock} /> Always Open</li>
                    </ul>
                </div><hr/>

                <div className="footer-right">
                    <h3 className="footer-h3">Links</h3>
                    <ul className="footer-links">
                        <div className="footer-links-row">
                            <li className="footer-right-li">Home</li>
                            <li className="footer-right-li">Land</li>
                            <li className="footer-right-li">Air</li>
                            <li className="footer-right-li">Water</li>
                        </div>

                        <div className="footer-links-row">
                            <li className="footer-right-li">Flowers</li>
                            <li className="footer-right-li">Fresh fruits</li>
                            <li className="footer-right-li">Veges</li>
                            <li className="footer-right-li">Herbs</li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                © Copyright 2021 |  Made by Joseph Muvevi
            </div>
        </div>
    )
}

export default Footer
