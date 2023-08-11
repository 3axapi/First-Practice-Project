import React from "react";
import "./PricingTablesSection.css"

function PricingTablesSection () {
    return (
        <div className="pricingtables">
            <div className="colxs">
                <div className="headerwrap">
                    <h2>DOŁĄCZ DO NAS!</h2>
                    <div className="wv">
                        <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)'}}></i>
                        <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)', marginLeft:-7.5}}></i>
                        <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)', marginLeft:-7.5}}></i>
                    </div>
                </div>
                <div className="sloganwrap">
                    <h4>
                        Otwieramy drzwi do świata IT! Studiuję IT jest dostępne dla każdego otwartego i głodnego wiedzy umysłu. Cena za roczny (366 dni) dostęp do naszej platformy wynosi 1250 zł. Za tę kwotę uzyskujesz nieograniczony dostęp do wszystkich naszych ścieżek i przedmiotów. Nieustanne rozwijanie i doskonalenie naszych zasobów, by zaoferować Ci jak najlepszą jakość edukacji.
                        
                        <br/><br/>
                        
                        Mamy dla Ciebie jednak świetną wiadomość! Teraz masz szansę dołączyć do nas za połowę ceny: 625 zł.
                    </h4>
                </div>
            </div>
            <div className="pricecontainer">
                <div className="colsm">
                    <div className="name">
                        <span style={{color: "white"}}>625zł</span>
                        <h3>Dostęp na rok (366 dni)</h3>
                    </div>
                    <div className="features">
                        <ul>
                            <li>50 proc. zniżki (oferta ograniczona czasowo) - 625 zł zamiast 1250 zł</li>
                            <li>Dokonując wpłaty zyskujesz dostęp do wszystkich ścieżek i przedmiotów dostępnych na platformie Studiuję IT</li>
                            <li>Płatności tPay - przelewy elektroniczne i blik</li>
                            <li>Potrzebujesz faktury VAT? Napisz do nas po zakupie</li>
                            <li>Po opłacie uruchamiamy Ci konto na platformie i dajemy Ci pełen dostęp (maksymalnie w 24 godziny).</li>
                        </ul>
                    </div>
                    <div className="pricebutton">
                        <a href="https://secure.tpay.com/?h=30335335552d79774e9fdc279f729f5875a3e842" className="pabutton">Dokonaj wpłaty</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingTablesSection;