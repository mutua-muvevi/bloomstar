import React from 'react'
import './Air.css'
import Plane from '../../../assets/plane.jpg'

const Air = () => {
    return (
        <div className="air">
            <div className="l-section-upper">
                <h3 className="l-section-image-h4">Air</h3>
                <p className="l-section-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="l-section-content">
                <div className="l-content-image">
                    <img className="l-image" src={Plane} alt="Air plane for logistics"/> 
                </div>

                <div className="l-content-content">
                    <p className="l-content-p">
                        For time-sensitive shipments we’re ready to offer a complete range of one-stop-shop for airfreight services. 
                        Bloomstar Logistics enjoys strategic partnerships with over ten different air carriers in each region to ensure that 
                        we can offer you many airfreight options. With this broad selection of air services, we give you an end-to-end logistics 
                        management solution that reduces transportation costs, improves communication among all parties and accelerates 
                        decision-making.
                    </p>
                    <ul className="l-content-ul">
                        <li className="l-content-li">
                            Partnerships with an exclusive network of partners worldwide to offer end to end services
                        </li>
                        <li className="l-content-li">
                            Competitive rates – we utilize hundreds of airline flights daily and you don’t have to be limited 
                            to designated pickup or delivery times;
                        </li>
                        <li className="l-content-li">
                            Door-to-door, Airport-to-Door, Airport-to-Airport;
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Air
