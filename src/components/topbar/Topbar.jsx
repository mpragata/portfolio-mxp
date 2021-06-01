import React from 'react'
import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <div className="textWrapper">
                        <button> Home </button>
                        <button> Projects </button>
                        <button> About Me </button>
                        <button> Contact Me </button>
                    </div>
                </div>
                <div className="right">
                    <div className="iconContainer">
                        <button> Github </button>
                        <button> LinkedIn </button>
                        <button> Resume </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
