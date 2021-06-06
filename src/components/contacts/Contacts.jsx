import React from 'react'
import "./contacts.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright, faMobileAlt} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faFacebookSquare, faDiscord} from '@fortawesome/free-brands-svg-icons'

export default function Contacts() {
    return (
        <div className="contacts" id="contacts">
            <h2>Contacts</h2>
            <div className="container">
                <div className="item">
                    <div className="iconContainer">
                        <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                    </div>
                    <span>marcxavierpragata@gmail.com <br/> marcxavierpragata2@gmail.com</span>
                </div>
                <div className="item">
                    <div className="iconContainer">
                        <FontAwesomeIcon className="icon" icon={faMobileAlt}/>
                    </div>
                    <span>09452500376 <br/> 09984533258 </span>
                </div>
                <div className="item">
                    <div className="iconContainer">
                        <FontAwesomeIcon className="icon" icon={faFacebookSquare}/>
                    </div>
                    <span>Marc Xavier E. Pragata</span>
                </div>
                <div className="item">
                    <div className="iconContainer">
                        <FontAwesomeIcon className="icon" icon={faDiscord}/>
                    </div>
                    <span>Chupzz#2191</span>
                </div>
            </div>
            <div className="lineContainer">
                <hr className="line"/>
            </div>
            <div className="footer">
                <p>
                    Pragata, Marc Xavier
                    <FontAwesomeIcon className="copyright"icon={faCopyright}/>
                </p>
            </div>
        </div>
    )
}
