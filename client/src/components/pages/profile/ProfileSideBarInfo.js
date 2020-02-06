import React from "react";

function ProfileSideBarInfo (props) {
    return (
        <div>
            <h2>Welcome!</h2>
            <br></br>
            <br></br>
            <h5>First Name:</h5> 
            <p></p> {props.firstName}
            <br></br>
            <h5>Last Name:</h5> 
            <p></p> {props.lastName}
            <br></br>
            <h5>Username:</h5> 
            <p></p> {props.userName}
        </div>
    );
}

export default ProfileSideBarInfo;