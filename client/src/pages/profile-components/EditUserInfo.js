import React, { Component } from "react";

import { Redirect } from "react-router-dom"

import UserAPI from "../../utils/userAPI";

import { Input } from "../../components/assets/form/Input";
import { FormBtn } from "../../components/assets/form/FormBtn";

class UpdateUserInfo extends Component {

    state = {
        _id: "",
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        // password: "",

        redirect: false,
        delete: false
    };

    clearTokenFromLS() {
        localStorage.removeItem("token");
      }

    componentDidMount() {
        const token = localStorage.getItem("token");
        this.getUser(token)
    }

    getUser = (token) => {
        UserAPI.getUser(token)
            .then(res => {
                const data = res.data
                this.setState({
                    _id: data._id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    username: data.username,
                    email: data.email,
                    // password: data.password
                });
                console.log(this.state)
            })
            .catch(err => {
                console.log('err :', err);
            });
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    setRedirectUpdate = () => {
        this.setState({
            redirect: true
        })
    }
    
    setRedirectDelete = () => {
        this.setState({
            delete: true
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName &&
            this.state.lastName &&
            this.state.username &&
            this.state.email 
            // this.state.password
        ) {
            UserAPI.updateUser({
                _id: this.state._id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                email: this.state.email,
                // password: this.state.password
            })
                .then(
                    res => {
                        if (res.status === 200) {
                            this.setRedirectUpdate();
                        }
                    })
                .catch(err => console.log(err));
        }
        else (
            alert("Finish the form.")
        )
    };

    handleDeleteUser = event => {
        event.preventDefault();
        UserAPI.deleteUser({
            _id: this.state._id
        })
            .then(res => {
                if (res.data.deletedCount === 1) {
                    this.clearTokenFromLS();
                    this.setRedirectDelete();
                }
            })
            .catch(err => {
                console.log('err :', err);
            });
    };

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/profile" />
        }
        if (this.state.delete === true) {
            return <Redirect to="/" />
        }
        return (
            <div className="wrap bg-white p-3 mx-auto rounded">
            <h1>Update Your Info</h1>
            <br></br>
                <form>

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
                        label={"Username:"}
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Username"
                    />

                    <Input
                        label={"Email:"}
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder="Email"
                    />

                    {/* <Input
                        label={"Password:"}
                        name="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        placeholder="Password"
                    /> */}

                    <FormBtn
                        onClick={this.handleFormSubmit}
                    >
                        Update
                    </FormBtn>

                    <FormBtn
                        onClick={this.handleDeleteUser}
                    >
                        Delete User
                    </FormBtn>

                </form>
            </div>
        );
    }
}

export default UpdateUserInfo;