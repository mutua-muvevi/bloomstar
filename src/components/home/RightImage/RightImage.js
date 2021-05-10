import React from 'react'
import './RightImage.css'

const RightImg = () => {
    return (
        <div className="home-right">
            <div className="home-right-content">
                <div className="home-right-left">
                    <p className="p-home-right">
                        We Export and import service, Pre-orders of 
                        fresh cut flowers,vegetables fresh and dried fruit,coffee and Tea, 
                        Freight Forwarding services, Transportation, Custom clearance
                    </p>
                </div>
                <div className="home-right-right">
                    <div className="home-right-upper">
                        <h3 className="home-right-upper-h4">What are we?</h3>
                    </div>
                    <div className="home-right-middle">
                        <ul className="home-right-middle-ul">
                            <li className="home-right-middle-li">
                                <h4 className="li-h4">Our work</h4>
                                <p className="li-p">Lorem Ipsum is simply dummy... </p>
                            </li>
                            <li className="home-right-middle-li">
                                <h4 className="li-h4">Why us</h4>
                                <p className="li-p">Lorem Ipsum is simply dummy... </p>
                            </li>
                        </ul>
                        <ul className="home-right-middle-ul">
                            <li className="home-right-middle-li">
                                <h4 className="li-h4">Mission Statement</h4>
                                <p className="li-p">Lorem Ipsum is simply dummy... </p>
                            </li>
                            <li className="home-right-middle-li">
                                <h4 className="li-h4">Vision statement</h4>
                                <p className="li-p">Lorem Ipsum is simply dummy... </p>
                            </li>
                        </ul>
                    </div>
                    <div className="home-right-lower">
                        <button>Find out more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightImg
