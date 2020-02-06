import React from "react";

// This file exports the Input component

export function Input(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input className="form-control" {...props} />
        </div>
    );
}