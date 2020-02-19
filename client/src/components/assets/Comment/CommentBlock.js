import React, { Component } from "react";
import "./style.css";

class CommentBlock extends Component {

    render() {
        return (
            <li className="media">
                <div className="media-body">
                    <strong className="text-success">{this.props.username}</strong>
                    <p>{this.props.body}</p>
                </div>
                <div className="media-footer">
                    <p>{this.props.createdAt}</p>
                </div>
            </li>
        )
    }

}

export default CommentBlock;