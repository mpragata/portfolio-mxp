import React from 'react'
import "./about.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5, faCss3Alt, faJsSquare, faReact, faPython} from '@fortawesome/free-brands-svg-icons'
import ReactTooltip from 'react-tooltip';

export default function About() {
    return (
        <div className="about" id="about">
            <h2>About Me</h2>
            <div className="textContainer">
                <p>
                    I'm a Computer Science Graduate from Ateneo de Naga University. I have 
                    been introduced to different programming languages while I was in the 
                    university. Thanks to my stay in the university, I have acquired basic
                    knowledge in:
                </p>
                <div className="iconContainer">
                    <FontAwesomeIcon data-tip="HTML" className="displayHtml" icon={faHtml5}/>
                    <ReactTooltip className="tooltip"/>
                    <FontAwesomeIcon data-tip="CSS" className="displayCss" icon={faCss3Alt}></FontAwesomeIcon>
                    <ReactTooltip className="tooltip"/>
                    <FontAwesomeIcon data-tip="Javascript" className="displayJs" icon={faJsSquare}></FontAwesomeIcon>
                    <ReactTooltip className="tooltip"/>
                    <FontAwesomeIcon data-tip="React" className="displayReact" icon={faReact}></FontAwesomeIcon>
                    <ReactTooltip className="tooltip"/>
                    <FontAwesomeIcon data-tip="Python" className="displayPython" icon={faPython}></FontAwesomeIcon>
                    <ReactTooltip className="tooltip"/>
                </div>
                <p className="block2">
                    My working experiences include being a DESO Technical Support Staff for the May 2019 Elections.
                    Worked on troubleshooting the PCOS machines that were used and following protocol regarding faulty
                    machines. Also worked as a Tech Intern in JSB Pandalivery Food and Delivery Services. Somewhat of a Tester
                    role with some coding for features were tasked for us. Worked briefly as a Customer Service Rep at Quantrics Naga.
                </p>
                <br/>
                <p>
                    My favorite part about web development is the continuous learning experience and ever evolving nature of technology.
                    Highly determined and disciplined, I would like to become a great front-end developer with your help.
                </p>
            </div>
        </div>
    )
}
