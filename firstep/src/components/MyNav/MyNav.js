import React from "react";
import "./MyNav.css";

function MyNav () {
    return ( 
        <nav>
            <div className="navdiv">
                <ul>
                    <li><a className="navlink" href="#">O Studiuję IT</a></li>
                    <li><a className="navlink" href="#">Ścieżki nauki</a></li>
                    <li><a className="navlink" href="#">Dla kogo STUDIUJĘ IT</a></li>
                    <li><a className="navlink" href="#">Dołącz do nas!</a></li>
                    <li><a className="navlink" href="#">Przedmioty</a></li>
                    <li><a className="navlink" href="#">Kontakt</a></li>
                    <li><a className="navlink" href="#">ZALOGUJ SIĘ</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default MyNav;