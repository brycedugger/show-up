import React, { Component } from "react";

import API from "../../../utils/API";

import { Input } from "../../../assets/form/Input";
import { FormBtn } from "../../../assets/form/FormBtn";


class Login extends Component {

    state = {
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
        if (this.state.username && 
            this.state.password
            ) {
        API.login({
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