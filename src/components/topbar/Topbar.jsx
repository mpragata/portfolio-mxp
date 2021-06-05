import React from 'react'
import "./topbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFilePdf} from '@fortawesome/free-regular-svg-icons'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <div className="textWrapper">
                        <a href="#intro">
                            <button> Home </button>
                        </a>
                        <a href="#projects">
                            <button> Projects </button>
                        </a>
                        <a href="#about">
                            <button> About Me </button>
                        </a>
                        <a href="#contacts">
                            <button> Contact Me </button>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="iconContainer">
                        <a href="https://github.com/mpragata" target="_blank" rel="noreferrer">
                            <button className="github">
                                Github <FontAwesomeIcon icon={faGithub}/>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/marcxavierpragata" target="_blank" rel="noreferrer">
                            <button className="linkedIn">
                                LinkedIn <FontAwesomeIcon icon={faLinkedin}/>
                            </button>
                        </a>
                        <a href="RESUME_MARC_XAVIER_PRAGATA.pdf" download>
                            <button className="resume">
                                Resume <FontAwesomeIcon icon={faFilePdf}/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
