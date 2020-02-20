import React, { Component } from "react";
import "./style.css";
import API from "../../../utils/API";
import { Form, Row } from "react-bootstrap";


class CommentForm extends Component {

    state = {
        username: "bdugger",
        comment: ""
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleFormSubmit = () => {
        if (this.state.user !== "" && this.state.comment !== "") {
            let req = {
                eventId: this.props.eventId,
                username: this.state.username,
                body: this.state.comment
            }

            API.createComment(req)
                .then(res => {
                    console.log(res);
                }
                )
                .catch(err => {
                    console.log(err);
                });
        }
    }

    render() {
        return (
            <Form>
                <Form.Group as={Row}>
                    <Form.Label>
                        Leave a Comment Below!
                    </Form.Label>
                    <Form.Control name="comment" onChange={this.handleInputChange} plaintext placeholder="Enter comment here..." />
                </Form.Group>
                <button variant="primary" onClick={this.handleFormSubmit}>
                    Submit
                </button>

            </Form>
        )
    }
}

export default CommentForm;