import React from "react";
import "./formbuttonStyle.css";


// This file exports the FormBtn component


export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="formButton">
            {props.children}

        </button>
    );
}