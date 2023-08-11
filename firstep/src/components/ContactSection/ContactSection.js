import React from "react";
import "./ContactSection.css";

function ContactSection () {
    return (
        <div className="contact">
            <div className="ctcpadgeheader1">
                <div className="ctcpadgeheader2">
                    <div className="ctcpadgeheader3">
                        <h2>KONTAKT</h2>
                        <div className="wv">
                            <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)'}}></i>
                            <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)', marginLeft:-7.5}}></i>
                            <i className="i fa fa-angle-down" style={{fontSize:50, fontWeight: 'bold', color: 'rgb(57, 222, 0)', marginLeft:-7.5}}></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ctcontainer">
                <div className="ctcc">
                    <div className="ctpreview">
                        <ul>
                            <li><a href="mailto:sekretariat@studiuje.it">sekretariat@studiuje.it</a></li>
                        </ul>
                        <p>Chcesz dołączyć do Studiuję IT? Masz pytania czy wątpliwości? Pisz do nas śmiało pod powyższy adres lub skorzystaj z formularza kontaktowego!</p>
                    </div>

                    <form>
                        <div className="custom-form">
                            <div className="row">
                                <div className="col12">
                                    <div>
                                        <div className="row cf">  {/**/}
                                            <div className="column">
                                                <div className="row">
                                                    <div className="col12">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Imię" className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="column">
                                                <div className="row">
                                                    <div className="col12">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Adres email" className="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col12" style={{paddingTop: 26.713}}>
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option value={1} selected>Temat: Chęć dołączenia do Studiuję IT</option>
                                            <option value={2}>Temat: Pytanie dotyczące nauki na Studiuję IT</option>
                                            <option value={3}>Temat: Pytanie dotyczące konkretnego przedmiotu</option>
                                            <option value={4}>Temat: Pytanie dotyczące konkretnego przedmiotu</option>
                                            <option value={5}>Temat: Inne</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col12">
                                    <div className="form-group">
                                        <textarea placeholder="Wiadomość" className="form-control rs" rows={4}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="ctcbutton">Wyślij wiadomość</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default ContactSection;