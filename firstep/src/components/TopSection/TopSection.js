import React, { Fragment } from "react";
import { useState, useCallback, useEffect } from "react";
import "./TopSection.css";
import "../../root.css"

function TopSection() {

    return (
        <div id="topsection">
            <div className="container">
                <div className="doublecontainer">
                    <div className="boxborder">
                        <h1 className="myh1">Z NAMI MOŻESZ BYĆ LEPSZYM PROGRAMISTĄ I SPECJALISTĄ IT!</h1>
                        <p className="myp">Zaplanuj swój rozwój razem z platformą Studiuję IT - najwyższej jakości edukacja online, która otworzy przed Tobą drzwi do kariery w branży IT jako programisty, project managera czy analityka.</p>
                    </div>
                    <div className="buttons">
                        <a className="butn btn1" href="#">Zaloguj się (dla uczestników)</a>
                        <a className="butn btn2" href="#">Dołącz do nas (dla kandydatów)</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection;

