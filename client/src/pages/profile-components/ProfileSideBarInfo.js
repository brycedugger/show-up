import React, { Component } from "react";
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
                <p>{this.props.userName}</p>
                </div>
        );
    }
}

export default ProfileSideBarInfo;
