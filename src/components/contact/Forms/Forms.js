import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Forms.css'

const Forms = () => {
    return (
        <div className="forms">
            <div className="forms-content">
                <div className="form-left">
                    <div className="form-left-content">
                        <h2 className="form-left-h3">Lets Talk</h2>
                        <p className="form-left-p">Reach us </p>
                    </div>
                </div>
                <form className="the-form">
                    <div className="form-email-name">
                        <div className="form-name">
                            <label className="form-label">Name</label>
                            <input className="form-input" placeholder="Enter your name here" type="text"/>
                        </div>
                        <div className="form-name">
                            <label className="form-label">Email</label>
                            <input className="form-input" placeholder="Enter your email here" type="email"/>
                        </div>
                    </div>
                    <div className="textarea">
                        <label className="form-label">Message</label>
                        <textarea placeholder="Emter your message" />
                    </div>
                    <button className="contact-button">Send <FontAwesomeIcon icon={faPaperPlane} /> </button>
                </form>
            </div>
        </div>
    )
}

export default Forms
