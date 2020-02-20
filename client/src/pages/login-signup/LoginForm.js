import React, { Component } from "react";

import { Redirect } from "react-router-dom"

import API from "../../utils/userAPI";

import { Input } from "../../components/assets/form/Input";
import { FormBtn } from "../../components/assets/form/FormBtn";


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

            <div className="form-container mb-5">
                <p className="name">Show Up!</p>
                <p className="motto">Find a show, get out there, and show up!</p>
                <div className="wrap bg-white p-3 mx-auto rounded">
                    <p className="cardType"></p>
                    <form>

                        <Input
                            label={"Username:"}
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            placeholder="Username"
                        />

                        <Input
                            label={"Password:"}
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="Password"
                        />

                        <FormBtn
                            onClick={this.handleFormSubmit}
                        >
                            Login
                        </FormBtn>

                        <a href="/signup" className="btn-link">New to Show Up? Sign-up now.</a>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;