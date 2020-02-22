import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import UserAPI from "../../utils/userAPI";
import "./bookmarkBtnStyling.css";


class BookmarkButton extends Component {

    handleOnClick = () => {
        console.log("bookmarking");
        let req = {
            username: this.props.username, 
            eventId: this.props.eventId
        }

        UserAPI.bookmarkEvent(req)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <Button className="bookmark" onClick={() => this.handleOnClick()} >Bookmark<i className="fa fa-bookmark" aria-hidden="true"></i></Button>
        );
    }
}

export default BookmarkButton;