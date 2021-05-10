import React from 'react'
import './HomeService.css'

const HomeService = () => {
    return (
        <div className="home-service">
            <div className="home-service-topics">
                <h2 className="home-service-topic-h2">Our Services</h2>
                <h3 className="home-service-topic-h3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
            </div>
            <div className="home-service-content">
                <div className="home-service-content-cards">
                    <div className="home-service-content-card-image-1">

                    </div>
                    <div className="home-service-content-card-text">
                        <h4 className="home-service-card-h4"> Ground </h4>
                        <p className="home-service-card-p">We offer cargo transport services within East and Central Africa for containerized...Find out more</p>
                    </div>
                </div>

                <div className="home-service-content-cards">
                    <div className="home-service-content-card-image-2">

                    </div>
                    <div className="home-service-content-card-text">
                        <h4 className="home-service-card-h4"> Air </h4>
                        <p className="home-service-card-p">Bloomstar Logistics enjoys strategic partnerships with over ten different air carriers...Find out more</p>
                    </div>
                </div>

                <div className="home-service-content-cards">
                    <div className="home-service-content-card-image-3">

                    </div>
                    <div className="home-service-content-card-text">
                        <h4 className="home-service-card-h4"> Sea </h4>
                        <p className="home-service-card-p">We work with an established network of over ten different ocean carrier partners...Find out more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeService
