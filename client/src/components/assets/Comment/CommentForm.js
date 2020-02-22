import React, { Component } from "react";
import "./style.css";
import API from "../../../utils/API";
import { Form } from "react-bootstrap";
import { FormBtn } from "../form/FormBtn";


class CommentForm extends Component {

    state = {
        comment: ""
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleFormSubmit = () => {
        if (this.state.comment !== "") {
            let req = {
                eventId: this.props.eventId,
                username: this.props.username,
                body: this.state.comment
            }

            API.createComment(req)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Leave a Comment Below!</Form.Label>
                    <Form.Control as="textarea" rows="2" name="comment" onChange={this.handleInputChange} plaintext placeholder="Enter comment here..."/>
                </Form.Group>
                <FormBtn onClick={this.handleFormSubmit}>
                        Submit
                </FormBtn>

            </Form>
        )
    }
}

export default CommentForm;