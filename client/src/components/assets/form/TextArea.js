import React from "react";

// This file exports the TextArea components

export function TextArea(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <textarea className="form-control" rows="3" {...props} />
        </div>
    );
}