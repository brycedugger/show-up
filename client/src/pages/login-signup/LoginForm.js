import React, { Component } from "react";

import { Redirect } from "react-router-dom"

import API from "../../utils/userAPI";

import { Input } from "../../components/assets/form/Input";
import { FormBtn } from "../../components/assets/form/FormBtn";
import { Form, Jumbotron, Row, Col } from 'react-bootstrap'
import "./style.css";


class LoginForm extends Component {

    state = {
        username: "",
        password: "",

        redirect: false

    };


    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username &&
            this.state.password
        ) {
            API.login({
                username: this.state.username,
                password: this.state.password
            })
                .then(
                    res => {
                        // store the token and userId in local storage
                        window.localStorage.token = res.data.token;
                        if (res.status === 200) {
                            this.setRedirect();
                        }
                    })
                .catch(err => console.log(err));
        }
        else (
            alert("Finish the form.")
        )
    };

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/" />
        }
        return (
            <Row className="justify-content-center">
            <Col xs lg="8">

            <Jumbotron className="LoginContainer">

            <div className="form-container mb-5">
                <h1 className="name text-center"><a  href="/">Show Up!</a></h1>
                <p className="motto text-center">Find a show, get out there, and show up!</p>
                <div className="wrap bg-white p-3 mx-auto rounded">
                    <p className="cardType"></p>
                    <form className="justify-content-center">

                        <Input
                            label={"Username:"}
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            placeholder="Username"
                        />

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </Form.Group>

                        <FormBtn
                            onClick={this.handleFormSubmit}
                        >
                            Login
                        </FormBtn>
                        <br></br>
                        <a href="/signup" className="btn-link">New to Show Up? Sign-up now.</a>
                    </form>
                </div>
            </div>
            </Jumbotron>
            </Col>
            </Row>
        );
    }
}

export default LoginForm;