import React from "react";
import "./AboutSection.css";
import logo from "../../imges/wv.png"
import img6 from "../../imges/image6.png";

function AboutSection () {
    return (
        <section className="about">
            <h2 className="abth2">o platformie studiuję it</h2>
            <div className="wv">
                <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)'}}></i>
                <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)', marginLeft:-7.5}}></i>
                <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)', marginLeft:-7.5}}></i>
            </div>

            <div className="about-info">
            
                <div className="abtimg">
                    <div className="imgcontainer">
                        <img src={img6} style={{maxWidth: 300, borderRadius: 7.5, marginBottom: 30}}/>
                    </div>
                </div>

                Cześć! Czy zastanawiałeś się kiedyś, jak zdobyć wiedzę i umiejętności z zakresu IT w sposób angażujący i dostosowany do twojego tempa? Czy pragniesz rozwijać swoje kompetencje i zyskać przewagę na dynamicznym rynku technologicznym? Jeżeli tak, to znakomicie trafiłeś.
                
                <br />
                <br />
                
                Na platformie Studiuję IT oferujemy szereg ścieżek edukacyjnych - od e<strong>sencji studiów informatycznych</strong>, przez <strong>programowanie, tworzenie stron internetowych, zarządzanie projektami IT</strong>, aż po naukę <strong>języka angielskiego</strong> w kontekście IT.
            
                <br />
                <br />

                Bez względu na to, czy jesteś na początku swojej drogi w świecie technologii, czy już realizowałeś pierwsze projekty komercyjne - z nami zawsze będziesz mógł zdobyć nową wiedzę i umiejętności.
            
                <br />
                <br />

                W świecie IT, nauka jest nie tylko koniecznością, ale również przyjemnością. Naszym celem jest dostarczenie Ci edukacji najwyższej jakości w sposób, który będzie dla Ciebie wyzwaniem, ale jednocześnie źródłem satysfakcji.

                <br />
                <br />

                <i>Zapraszamy do wspólnej nauki!</i>
                <br />
                <i>Bartłomiej Borowczyk, znany również jako Samuraj Programowania</i>

            </div>
        
        </section>
    );
}

export default AboutSection;