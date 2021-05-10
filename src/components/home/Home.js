import React from 'react'
import Banner from './Banner/Banner'
import RightImg from './RightImage/RightImage'
import "./Home.css"
import Homeproduct from './HomeProduct/HomeProduct'
import HomeService from './HomeService/HomeService'

const Home = () => {
    return (
        <div className="home">
            <Banner/>
            <RightImg/>
            <Homeproduct/>
            <HomeService/>
        </div>
    )
}

export default Home
