import React from "react";
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
                    "email": "bryce.dugger@outlook.com",
                    "firstName": "Bryce",
                    "lastName": "Dugger",
                    "password": "$2a$08$FThZYKtqROUSxQmRoMA4Ve5n8DYOAyCGjijdXJbs802xMX.B6PF4."
                }
            ]
        }
    }

    replaceModalItem(index) {
        this.setState({requiredItem: index});
    }

    saveModalDetails(props) {
        const requiredItem = this.state.requiredItem;
        let initialUserInfo = this.state.user;
        initialUserInfo[requiredItem] = props;
        this.setState({user: initialUserInfo});
    }

    render() {
        const user = this.state.user.map((props, index)) => {
            return (
                <div>
                    <h2>Welcome!</h2>
                        <br></br>
                        <br></br>
                    <h5>First Name</h5> 
                    <p></p> {this.state.firstName}
                        <br></br>
                    <h5>Last Name</h5> 
                    <p></p> {this.state.lastName}
                        <br></br>
                    <Button variant="primary" onClick={() => this.replaceModalItem(index)}>
                        Edit Profile
                </Button> {" "}
            )
        }
    }
} 