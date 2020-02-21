import React, { Component } from "react";

import { Redirect } from "react-router-dom"

import API from "../../utils/userAPI";

import { Row, Col, Jumbotron } from 'react-bootstrap';
import { Input } from "../../components/assets/form/Input";
import { FormBtn } from "../../components/assets/form/FormBtn";
import "./style.css";


class SignupForm extends Component {

    state = {
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        password: "",

        redirect: false
    };

    viewRes = (res) => {
        console.log("response" + res)
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.email &&
            this.state.firstName &&
            this.state.lastName &&
            this.state.username &&
            this.state.password
        ) {
            API.signup({
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password
            })
                .then(
                    res => {
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
            return <Redirect to="/login" />
        }
        return (
            <Row className="justify-content-center">
            <Col xs lg="8">
            
            <Jumbotron className="SignupContainer">
            <div class="form-container mb-5">
                <h1 className="name text-center"><a href="/">Show Up!</a></h1>
                <p className="motto text-center">Find a show, get out there, and show up!</p>
                <div className="wrap bg-white p-3 mx-auto rounded">
                    <p className="cardType"></p>
                    <form className="justify-content-center">

                        <Input
                            label={"Email Address:"}
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder="Email"
                        />

                        <Input
                            label={"First Name:"}
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            placeholder="First Name"
                        />

                        <Input
                            label={"Last Name:"}
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            placeholder="Last Name"
                        />

                        <Input
                            label={"Select a Username:"}
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            placeholder="Username"
                        />

                        <Input
                            label={"Select a Password:"}
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="Password"
                        />

                        <FormBtn
                            onClick={this.handleFormSubmit}
                        >
                            Sign Up
                        </FormBtn>

                        <br></br>

                        <a href="/login" className="btn-link">Already have an account? Login here.</a>

                    </form>
                </div>
            </div>
            </Jumbotron>
            </Col>
            </Row>
        );
    }
}

export default SignupForm;