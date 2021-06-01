import React from 'react'
import "./intro.scss"
import pic from "./das.PNG"

export default function Intro() {
    return (
        <div className="intro">
            <div className="left">
                <div className="textContainer">
                    <h2>Hi there! I'm</h2>
                    <h1>Marc Xavier Pragata</h1>
                    <h3>Front-end Web Developer</h3>
                </div>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src={pic} alt=""/>
                </div>
            </div>
        </div>
    )
}
