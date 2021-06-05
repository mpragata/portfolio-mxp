import React from 'react'
import "./projects.scss"

export default function Projects() {
    // const projectData = [
    //     {
    //     id:"1",
    //     title:"React Calculator",
    //     img:"",
    //     desc:"Simple Calculator Application in React",
    //     },
    //     {
    //     id:"2",
    //     title:"React Notes",
    //     img:"",
    //     desc:"Simple Notes Application in React",
    //     },
    //     {
    //     id:"3",
    //     title:"React Tic Tac Toe",
    //     img:"",
    //     desc:"Tic Tac Toe Application in React",
    //     },
    // ]
    return (
        <div className="projects" id="projects">
            <h2> Projects </h2>
            {/* {projectData.map((d) => (

            ))} */}
            <div className="projContainer">
                <div className="item">
                    Project 1
                </div>
                <div className="item">
                    Project 1
                </div>
                <div className="item">
                    Project 1
                </div>
            </div>
        </div>
    )
}
