import React from "react";
import "./MyFooter.css";

function MyFooter () {
    return (
        <div className="footer_1">
            <div className="ftcontainer">
                <div className="row">
                    <div className="col125">
                        <div>
                            <span style={{fontSize: "1.2rem"}}>Platforma do Nauki Programowania i IT</span>
                        </div>
                        <div>
                        Prawa autorskie © 2023 Wszelkie prawa zastrzeżone
                        </div>
                        <div className="ac">
                            Obsługiwana przez: 
                            <a href="https://pl.site123.com/">SITE123</a>
                             - 
                            <a href="https://pl.site123.com/">Tworzenie Stron WWW</a>
                        </div>
                    </div>
                    <div className="col125" style={{textAlign: "right"}}>
                        <ul className="navPages nav navbar-nav">
                            <li><a href="https://dokumenty.studiuje.it/regulamin-paltformy-i-zakupu.pdf">
                                <span>Regulamin zakupu</span>
                            </a></li>
                            <li><a href="https://dokumenty.studiuje.it/polityka-prywatnosci.pdf">
                                <span>Polityka Prywatności</span>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyFooter;