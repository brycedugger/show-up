import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import UserAPI from "../../utils/userAPI";


class BookmarkButton extends Component {

    state = {
        userId: ""
    };
    componentDidMount() {
        const token = localStorage.getItem("token");
        this.handleGetUser(token);
    }

    handleGetUser = token => {
        UserAPI.getUser(token).then(res => {
            this.setState({userId: res.data._id});
        }).catch(err => {
            console.log(err);
        })
    };

    addBookmarkedEventToUsesrDB = data => {
        UserAPI.bookmarkEvent({userId: this.state.userId, _id: data._id}).then(res => {
            if (res.status === 200) {
                this.setRedirect();
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/profile"/>
        }

        return (
            <Button variant="outline-success" {...this.props.eventId} ><i class="fa fa-bookmark" aria-hidden="true"></i></Button>
        );
    }
}

export default BookmarkButton;