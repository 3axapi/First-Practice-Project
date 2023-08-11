import React, { useState, useEffect } from "react";
import "./MyCard.css";

function MyCard(props) {

    let image_marg = props.float == "right" ? "0 0 8px 50px" : "0 50px 8px 0";
    const [visible, setVisible] = useState(!props.hidden);
    
    useEffect(() => {
        setVisible(!props.hidden);
    });

    return (
        <div className="card" style={{backgroundColor:props.background, color: props.color}}>
                <img src={props.image} className="cardimg" style={{float: props.float, margin: image_marg}}/>
            <h3 className="cardh3">{props.heading}</h3>
            <p className="cardp">{props.paragraph}</p>
            {visible && <a href={props.href} className="carda">zobacz więczej</a>}
        </div>
    );
}

export default MyCard;