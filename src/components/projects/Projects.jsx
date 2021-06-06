import React from 'react'
import "./projects.scss"
import react_notes_app from './react_notes_app.PNG'
import react_calc from './react_calc.PNG'
import react_tic_tac_toe from './react_tic_tac_toe.PNG'
import react_web_portfolio from './react_web_portfolio.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Projects() {
    // const projectData = [
    //     {
    //     id:"1",
    //     title:"React Calculator",
    //     img:"./react_calc.PNG",
    //     desc:"Simple Calculator Application in React",
    //     link:"https://github.com/mpragata/react_calc",
    //     },
    //     {
    //     id:"2",
    //     title:"React Notes",
    //     img:"./react_notes_app.PNG",
    //     desc:"Simple Notes App in React",
    //     link:"https://github.com/mpragata/react-notes-app",
    //     },
    //     {
    //     id:"3",
    //     title:"React Tic Tac Toe",
    //     img:"./react_tic_tac_toe.PNG",
    //     desc:"Tic Tac Toe Application in React",
    //     link:"https://github.com/mpragata/react-tic-tac-toe-udemy",
    //     },
    // ]
    return (
        <div className="projects" id="projects">
            <h2> Projects </h2>
            {/* {projectData.map((d) => (

            ))} */}
            <div className="projContainer">
                <div className="item">
                    <div className="left">
                        <div className="textContainer">
                            <div className="title">
                                <h3>React Notes App</h3>
                            </div>
                            <div className="description">
                                <p>Simple Notes App using React</p>
                            </div>
                            <a href="https://github.com/mpragata/react-notes-app" target="_blank" rel="noreferrer">
                                <button className="github">
                                    View Code <FontAwesomeIcon icon={faGithub}/>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <img src={react_notes_app} alt=""/>
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        <div className="textContainer">
                            <div className="title">
                                <h3>React Calculator</h3>
                            </div>
                            <div className="description">
                                <p>Simple Calculator using React</p>
                            </div>
                            <a href="https://github.com/mpragata/react_calc" target="_blank" rel="noreferrer">
                                <button className="github">
                                    View Code <FontAwesomeIcon icon={faGithub}/>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <img src={react_calc} alt=""/>
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        <div className="textContainer">
                            <div className="title">
                                <h3>React Tic-Tac-Toe</h3>
                            </div>
                            <div className="description">
                                <p>Tic-Tac-Toe Game using React made with udemy guide</p>
                            </div>
                            <a href="https://github.com/mpragata/react-tic-tac-toe-udemy" target="_blank" rel="noreferrer">
                                <button className="github">
                                    View Code <FontAwesomeIcon icon={faGithub}/>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <img src={react_tic_tac_toe} alt=""/>
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        <div className="textContainer">
                            <div className="title">
                                <h3>Web Portfolio</h3>
                            </div>
                            <div className="description">
                                <p>This web portfolio made using React (Work in Progress)</p>
                            </div>
                            <a href="https://github.com/mpragata/portfolio-mxp" target="_blank" rel="noreferrer">
                                <button className="github">
                                    View Code <FontAwesomeIcon icon={faGithub}/>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <img src={react_web_portfolio} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
