import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";

class UpvoteButton extends Component {
    state = {
        votes: 0,
        clicked: false
    };

    componentDidMount = () => {
        this.updateVotes();
    }

    updateVotes = () => {
        API.getOneEvent(this.props.eventId)
            .then(res => {
                this.setState({
                    votes: res.data.upvotes
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleClick = () => {
        if (!this.state.clicked) {
            API.upvoteEvent(this.props.eventId)
                .then(
                    this.setState({
                        clicked: true
                    }),
                    this.updateVotes()
                )
                .catch(err => {
                    console.log(err);
                });
        }
    };

    render() {
        return (
            <Button variant="outline-success" onClick={this.handleClick}> ^ {this.state.votes} </Button>
        );
    }
}

export default UpvoteButton;
