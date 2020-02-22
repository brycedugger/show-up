import React, { Component } from "react";

import { FormBtn } from "../../components/assets/form/FormBtn";

import "./style.css";

class ProfileSideBarInfo extends Component {
    render() {
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
                onClick={this.handleEditUser}
            >
                Edit Info
            </FormBtn>
            
            </div>
        );
    }
}

export default ProfileSideBarInfo;
