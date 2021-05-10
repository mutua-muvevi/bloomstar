import React from 'react'
import Truck from '../../../assets/truck 1.jpg'

const Broker = () => {
    return (
        <div className="air">
            <div className="l-section-upper">
                <h3 className="l-section-image-h4">Customs Broker & Brokerage Service</h3>
                <p className="l-section-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="l-section-content">
                <div className="l-content-image">
                    <img className="l-image" src={Truck} alt="Air plane for logistics"/> 
                </div>

                <div className="l-content-content">
                    <p className="l-content-p">
                        Getting through customs quickly and efficiently is a competitive advantage. Bloomstar cost-effective basic and
                        value-added customs-related services help move your shipments through customs to their final 
                        destination as smoothly as possible.<br/>
                        Bloomstar provides you with:
                    </p>
                    <ul className="l-content-ul">
                        <li className="l-content-li">
                            Preparation import and export documents to comply with Customs regulations;
                        </li>
                        <li className="l-content-li">
                            Offer counsel and services in connection with commodity tax rates and duties import and export restrictions, 
                            exchange rates, international shipping and transportation regulations;
                        </li>
                        <li className="l-content-li">
                            Arrange payments for transportation, storage, duties and other expenses related to import/export goods.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Broker
