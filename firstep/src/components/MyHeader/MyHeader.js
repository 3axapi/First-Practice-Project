import React from "react";
import logo from "../../imges/headerimg.png";
import "./MyHeader.css"

function MyHeader() {
    return (
        <>
            <header>
                <div className="headerimg">
                    <a className="logoimg">
                        <img src={logo}/>
                    </a>
                </div>
            </header>
        </>
    )
}

export default MyHeader;