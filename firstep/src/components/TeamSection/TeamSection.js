import React from "react";
import "./TeamSection.css";

function TeamSection () {
    return (
        <div className="teamsection">
            <div className="pretmsctn">
                <h2 className="tsh2">DLA KOGO STUDIUJĘ IT</h2>
                <div className="wv">
                    <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)'}}></i>
                    <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)', marginLeft:-7.5}}></i>
                    <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)', marginLeft:-7.5}}></i>
                </div>
            </div>

            <div className="faces">
                <div className="facecontent">
                    <div className="faceshadow">
                        <div className="face face1"></div>
                        <p className="thp">Bez względu na to, czy dopiero zaczynasz swoją przygodę z programowaniem, czy już pracujesz zawodowo w branży IT, Studiuję IT to miejsce dla Ciebie. Nasza platforma uzupełnia luki wiedzy, pomagając Ci zrozumieć fundamenty, które mogą być nieosiągalne bez technicznego wykształcenia, takiego jak studia inżynierskie. Damy Ci solidne podstawy niezależnie od tego, czy programujesz, zarządzasz projektami IT czy budujesz roboty.</p>
                        <div style={{marginBottom: 32}}/>
                        <div>
                            <span className="thspan">Dla początkujących i doświadczonych w branży IT</span>
                        </div>
                    </div>
                </div>
                <div className="facecontent">
                    <div className="faceshadow">
                        <div className="face face2"></div>
                        <p className="thp">Jeśli jesteś osobą z wykształceniem humanistycznym lub bez specjalistycznego tła technicznego, a pragniesz dokonać intensywnej zmiany w swojej karierze w kierunku IT lub programowania, Studiuję IT jest dla Ciebie. Zapewniamy Ci narzędzia, które pomogą Ci zrozumieć i opanować technologie informatyczne, programowanie, web development i wiele innych aspektów branży IT.</p>
                        <div style={{marginBottom: 32}}/>
                        <div>
                            <span className="thspan">Dla tych, którzy pragną zmiany kierunku na IT</span>
                        </div>
                    </div>
                </div>
                <div className="facecontent">
                    <div className="faceshadow">
                        <div className="face face3"></div>
                        <p className="thp">Czy interesujesz się IT jako hobby? Czy chciałbyś rozwinąć swoje umiejętności, aby lepiej zrozumieć świat technologii? A może potrzebujesz konkretnego zagadnienia do swojej pracy? Bez względu na wiek czy zawód, jeśli chcesz 'postudiować', to jest to miejsce dla Ciebie. Rozwijaj swoje horyzonty i odkrywaj fascynujący świat technologii razem ze Studiuję IT.</p>
                        <div style={{marginBottom: 32}}/>
                        <div>
                            <span className="thspan">Dla tych, którzy chcą odkrywać technologie jako hobby lub poszerzać horyzonty</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamSection;