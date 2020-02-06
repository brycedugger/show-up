import React, { Component } from "react";

import API from "../../../utils/API";

import { Input } from "../../../assets/form/Input";
import { FormBtn } from "../../../assets/form/FormBtn";


class Login extends Component {

    state = {
        emailAddress: "",
        firstName: "",
        lastName: "",
        username: "",
        password: ""
    };

    viewRes = (res) => {
        console.log("response" + res)
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.emailAddress && 
            this.state.firstName && 
            this.state.lastName && 
            this.state.username && 
            this.state.password
            ) {
        API.createUser({
            emailAddress: this.state.emailAddress,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            password: this.state.password
        })
            .then(res => this.viewRes(res))
            .catch(err => console.log(err));
        }
        // else( 
        //     alert("Finish the form.")
        // )
    };

    render() {
        return (
            <form>

                <Input
                    label={"Email Address:"}
                    name="emailAddress"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    placeholder="Password"
                />

                <Input
                    label={"First Name:"}
                    name="firstName"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    placeholder="Password"
                />

                <Input
                    label={"Last Name:"}
                    name="lastName"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    placeholder="Password"
                />

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
                    // disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                >
                    Submit Event
              </FormBtn>
            </form>
        );
    }
}

export default Login;