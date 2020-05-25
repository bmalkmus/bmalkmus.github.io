import React from "react";
import "./style.css";

function Container (props) {
    return (
        <div className ="context-wrapper">
                {props.children}
        </div>
    )
}

export default Container;