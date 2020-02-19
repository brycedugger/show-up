import React, { Component } from "react";
import EditProfileBtn from "../../pages/profile-components/EditProfileBtn";

class User extends Component {
    constructor(props) {
        super(props);
        this.replaceModalItem = this.replaceModalItem.bind(this);
        this.saveModalDetails = this.saveModalDetails.bind(this);
        this.state = {
            requiredItem: 0,
            user: [
                {
                    email: "bryce.dugger@outlook.com",
                    firstName: "Bryce",
                    lastName: "Dugger",
                    password: "$2a$08$FThZYKtqROUSxQmRoMA4Ve5n8DYOAyCGjijdXJbs802xMX.B6PF4."
                }
            ]
        }
    }

    replaceModalItem(index) {
        this.setState({requiredItem: index});
    }

    saveModalDetails(item) {
        const requiredItem = this.state.requiredItem;
        let initialUserInfo = this.state.user;
        initialUserInfo[requiredItem] = item;
        this.setState({user: initialUserInfo});
    }

    render() {
        const user = this.state.user.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{
                        item.email
                    }</td>
                    <td>{" "}
                        - {" "}</td>
                    <td>{
                        item.firstName
                    }</td>
                    <td>
                        <button className="primary" data-toggle="modal"
                            onClick={
                                () => this.replaceModalItem(index)
                        }>Edit Profile</button>
                        {" "} </td>
                </tr>
            )
        });

        const requiredItem = this.state.requiredItem;
        let modalData = this.state.user[requiredItem];
        return (
            <div>
                <table className="table table-striped">
                    <tbody> {user} </tbody>
                </table>
                <EditProfileBtn title={
                        modalData.email
                    }
                    msg={
                        modalData.firstname
                    }
                    saveModalDetails={
                        this.saveModalDetails
                    }/>
            </div>
        );
    }
}

export default User;