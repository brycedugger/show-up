import React, {Component} from "react";
import Button from "react-bootstrap/Button";

const eventList = [{
        id: 1,
        event: "",
        votes: 0
    },
]

class UpvoteButton extends Component {
    state = {
        events: []
    };

    componentDidMount() {
        this.setState({ events: eventList });
    }
    
    handleEvent = (upcomingeventId) => {
        const updatedVotingList = this.state.events.map(upcomingEvent => {
            if (upcomingEvent.id === upcomingeventId) {
                return Object.assign({}, upcomingEvent, {
                    votes: upcomingEvent.votes + 1
                });
            } else {
                return upcomingEvent;
            }
        });

        this.setState({
            events: updatedVotingList
        });
    };

    render() {
        return this.state.events.map(upcomingEvent => (
        <Vote key={upcomingEvent.id} id={upcomingEvent.id} event={upcomingEvent.event} votes={upcomingEvent.votes} onVote={this.handleEvent} />
        ));
    }
}

class Vote extends Component {
    handleClick = () => this.props.onVote(this.props.id);
    render() {
        return (
                <Button variant="outline-success" onClick={this.handleClick}> ^ {this.props.votes} </Button> 
        );
    }
}

export default UpvoteButton;
