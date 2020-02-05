import React, { Component } from "react";
import Cards from "../../assets/Card";
import API from "../../utils/API";



class Profile extends Component {

    render() {
        return (
            <div className="container">
                <div className="container mb-5 mt-5">
                    <p>Hello from Profile Page</p>
                </div>
                <Cards />

            </div>
        );
    }

}

export default Profile;