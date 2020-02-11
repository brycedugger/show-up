import React, { Component } from "react";

import API from "../../../utils/API";

import { Input } from "../../../components/assets/form/Input";
import { FormBtn } from "../../../components/assets/form/FormBtn";


class SignupForm extends Component {

    state = {
        email: "",
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
        if (this.state.email && 
            this.state.firstName && 
            this.state.lastName && 
            this.state.username && 
            this.state.password
        )   {
            API.createUser({
                emailAddress: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password
            })
            .then(
                res => {
                //add redirect to the event's page.
                alert("Success")
            })
            .catch(err => console.log(err));
            }
        else( 
            alert("Finish the form.")
        )
    };

    render() {
        return (
            <form>

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
                    Submit Event
                </FormBtn>
                
                <a href="/lisu/login" className="btn-link">Already have an account? Login here.</a>

            </form>
        );
    }
}

export default SignupForm;