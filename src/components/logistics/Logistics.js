import React from 'react'
import Air from './Air/Air'
import "./Logistics.css"
import LogisticsBanner from './LogisticsBanner/LogisticsBanner';
import Ocean from './Ocean/Ocean'
import Broker from './Broker/Broker'
import Transport from './Transport/Tansport'

const Logistics = () => {
    return (
        <div className="logistics">
            <LogisticsBanner/>
            <Air/>
            <Ocean/>
            <Broker/>
            <Transport/>
        </div>
    )
}

export default Logistics
