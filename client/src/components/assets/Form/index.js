import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function TextArea(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="3" {...props} />
        </div>
    );
}

export function SelectVenue() {
    return (
        <div className="form-group">
            <label>Venue (Select)
                <select className="form-control" id="exampleFormControlSelect1" value = {props.value}>
                    <option value="Paramount Theatre">Paramount Theatre</option>
                    <option value="The Gorge Ampetheatre">The Gorge Ampetheatre</option>
                    <option value="Showbox at the Market">Showbox at the Market</option>
                    <option value="Showbox SoDo">Showbox SoDo</option>
                    <option value="Neumos">Neumos</option>
                </select>
            </label>
        </div>
    );
}

export function SelectGenre() {
    return (
        <div className="form-group">
            <label>Genre
                <select className="form-control" id="exampleFormControlSelect1" {...props.value}>
                    <option value="Rock">Rock</option>
                    <option value="Country">Country</option>
                    <option value="Hip Hop">Hip Hop</option>
                    <option value="Blues">Blues</option>
                    <option value="Funk">Funk</option>
                </select>
            </label>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
            {props.children}
        </button>
    );
}