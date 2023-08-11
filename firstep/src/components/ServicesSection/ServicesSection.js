import React from "react";
import "./ServicesSection.css";
import MyCard from "../MyCard/MyCard";
import { getData } from "../MyCard/data";

function ServicesSection () {

    const state = {
      info: getData()
    }

    return (
        <div className="services">
            <div className="mrgsrvc">
                <div className="preinfo"> 
                    <h2 className="ssh2">ŚCIEŻKI NAUKI NA STUDIUJĘ IT</h2>
                    <div className="wv">
                        <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)'}}></i>
                        <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)', marginLeft:-7.5}}></i>
                        <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)', marginLeft:-7.5}}></i>
                    </div>
                    <h4>
                    Zapraszamy Cię do odkrywania ścieżek nauki na Studiuję IT, które są naszą odpowiedzią na tradycyjne specjalizacje studiów. Każda ścieżka została starannie zaprojektowana, aby pomóc Ci zdobyć umiejętności i wiedzę potrzebną do osiągnięcia Twojego celu kariery w IT. Dzięki temu łatwiej znajdziesz swoją drogę w szerokiej ofercie Studiuję IT, skupiając się na tym, co naprawdę Cię interesuje i czego potrzebujesz, aby osiągnąć sukces.
                    </h4>
                </div>
                    {
                        state.info.map (
                            element => {
                                if (element._id > 7) return
                                if (element.href) return element.href && <MyCard image={element.img}
                                                                                heading={element.hdg}
                                                                                paragraph={element.prgph}
                                                                                href={element.href}
                                                                                float={element.float}
                                                                                background={element.bckgrd}
                                                                                color={element.color}
                                                                                />
                                }
                        )
                    }
            </div>
        </div>
    )
}

export default ServicesSection;