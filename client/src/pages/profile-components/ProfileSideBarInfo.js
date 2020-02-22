import React, { Component } from "react";

import { FormBtn } from "../../components/assets/form/FormBtn";

import { Redirect } from "react-router-dom"


import "./style.css";


class ProfileSideBarInfo extends Component {

    state = {
        redirect: false
    };

    setRedirectEditUser = () => {
        this.setState({
            redirect: true
        })
    }

    render() {

        if (this.state.redirect === true) {
            return <Redirect to="/edituserinfo" />
        }

        return (
            <div>
                <h2>Welcome!</h2>
                <br></br>
                <br></br>
                <h5>First Name</h5>
                <p>{this.props.firstName}</p>
                
                <br></br>
                <h5>Last Name</h5>
                <p>{this.props.lastName}</p>
                
                <br></br>
                <h5>Username</h5>
                <p>{this.props.username}</p>
                
                <br></br>
                <h5>Email</h5>
                <p>{this.props.email}</p>
                <br></br>
                
            <FormBtn
                onClick={this.setRedirectEditUser}
            >
                Edit Info
            </FormBtn>
            
            </div>
        );
    }
}

export default ProfileSideBarInfo;
