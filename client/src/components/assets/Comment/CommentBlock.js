import React, { Component } from "react";
import "./style.css";
import Moment from 'react-moment';


class CommentBlock extends Component {

    render() {
        return (
            <li className="media">
                <div className="media-body">
                    <strong className="text-success">{this.props.username}</strong>
                    <p>{this.props.body}</p>
                </div>
                <div className="media-footer">
                <Moment format="YYYY/MM/DD HH:mm:ss">{this.props.createdAt}</Moment>
                </div>
            </li>
        )
    }

}

export default CommentBlock;