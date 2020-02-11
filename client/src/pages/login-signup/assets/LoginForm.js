import React, { Component } from "react";

import API from "../../../utils/API";

import { Input } from "../../../components/assets/form/Input";
import { FormBtn } from "../../../components/assets/form/FormBtn";


class LoginForm extends Component {

    state = {
        username: "",
        password: ""
    };

    handleInputChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && 
            this.state.password
        )   {
            API.login({
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
                    Submit Event
                </FormBtn>

                <a href="/lisu/signup" className="btn-link">New to Show Up? Sign-up now.</a>
            </form>
        );
    }
}

export default LoginForm;