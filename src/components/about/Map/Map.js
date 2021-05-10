import React from 'react'
import './Map.css'

const Map = () => {
    return (
        <div className="map">
            <iframe className="the-map" title="Bloomstar" 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15954.978694948886!2d36.92042244236666!3d-1.3290300913884556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1620483540860!5m2!1sen!2ske" allowfullscreen="" loading="lazy" style={{width: '90vw !important'}}/>
        </div>
    )
}

export default Map
