import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faCarrot, faFan, faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import "./HomeProduct.css"

const Homeproduct = () => {
    return (
        <div className="home-product">
            <div className="home-product-topics">
                <h2 className="home-product-topic-h2">Our Products</h2>
                <h3 >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
            </div>

            <div className="home-product-content">
                <div className="home-product-content-left">
                    <div className="home-product-cards">
                        <div className="home-product-cards-row">
                            <div className="home-product-singe-card">
                                <h3 className="home-product-singe-card-p">Flowers</h3>
                                <FontAwesomeIcon className="home-product-fontawesome" icon={faFan} size="7x" color="#f3c900"/>
                            </div>
                            <div className="home-product-singe-card">
                                <h3 className="home-product-singe-card-p">Veges</h3>
                                <FontAwesomeIcon className="home-product-fontawesome" icon={faCarrot} size="7x" color="#f76a0f"/>
                            </div>
                        </div>

                        <div className="home-product-cards-row">
                            <div className="home-product-singe-card">
                                <h3 className="home-product-singe-card-p">Herbs</h3>
                                <FontAwesomeIcon className="home-product-fontawesome" icon={faSeedling} size="7x" color="#25592a" />
                            </div>
                            <div className="home-product-singe-card">
                                <h3 className="home-product-singe-card-p">Fresh fruit</h3>
                                <FontAwesomeIcon className="home-product-fontawesome" icon={faAppleAlt} size="7x" color="#e4685b"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-product-content-right">
                    <div className="home-product-content-right-img">
                        <FontAwesomeIcon icon={faLeaf} size="6x" color="azure" />
                        <h4 className="home-product-left-p">
                            What we offer for you
                        </h4>
                    </div>
                    <div className="home-product-content-right-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining essentially
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homeproduct
