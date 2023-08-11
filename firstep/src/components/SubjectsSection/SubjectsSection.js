import React from "react";
import "./SubjectsSection.css";
import MyCard from "../MyCard/MyCard";
import { getData } from "../MyCard/data";

function SubjectsSection (props) {

    const state = {
      info: getData()
    }
    
    return (
        <div className="subjects">
            <div className="container-fluid">
                <div className="row">
                    <div className="sbjcontainer">
                        <div className="row sbjtext-center" style={{paddingBottom: 10}}>
                            <div className="sbjcol12">
                                <div className="sbjheader">
                                    <h2>PRZEDMIOTY NA STUDIUJĘ IT</h2>
                                    <div className="wv">
                                        <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)'}}></i>
                                        <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)', marginLeft:-7.5}}></i>
                                        <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)', marginLeft:-7.5}}></i>
                                    </div>
                                </div>
                                <div className="sbjslogan">
                                    <h4>Oto przedmioty, które możesz realizować na Studiuję IT. Oczywiście możesz wybrać tylko te, które Cię interesują.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mrgsbj">
                {
                    state.info.map (
                        element => {
                            if (element._id < 8) return
                            else if (element.href) return element.href && <MyCard image={element.img}
                                                                                heading={element.hdg}
                                                                                paragraph={element.prgph}
                                                                                href={element.href}
                                                                                float={element.float}
                                                                                background={element.bckgrd}
                                                                                color={element.color}
                                                                                />
                            else return <MyCard image={element.img} heading={element.hdg} paragraph={element.prgph} float={element.float} hidden={true}/>
                        }
                    )
                }
            </div>
        </div>
    );
}

export default SubjectsSection;