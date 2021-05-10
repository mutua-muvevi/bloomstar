import React from 'react'
import PlantsBanner from './PlantsBanner/PlantsBanner'
import Flower from './Flowers/Flowers'
import Fruits from './Fruits/Fruits'
import Veges from './Veges/Veges'
import Herbs from './Herbs/Herbs'

const Plants = () => {
    return (
        <div className="plants">
            <PlantsBanner/>
            <Flower/>
            <Fruits/>
            <Veges/>
            <Herbs/>
        </div>
    )
}

export default Plants
