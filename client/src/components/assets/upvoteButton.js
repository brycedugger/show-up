import React, {Component} from "react";
import Button from "react-bootstrap/Button";

const eventList = [{
        id: 1,
        event: "Artist",
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
            <div className="UpvoteButton">
                {this.props.event}
                <Button variant="outline-success" onClick={this.handleClick}>+</Button> {this.props.votes}
            </div>
        );
    }
}


// function PostButton(props) {
//     let style = {
//         width: 24,
//         height: 24,
//         color: 'blue'
//     };
//     return (
//         <Button style={style}onClick={() => props.handleClick()}>{props.label}
//         </Button>
//     );
// }

// function Text(props) {
//     let style = {
//         border: "1px solid blue",
//         width: props.width
//     };
//     return (
//         <div style={style}>{props.text}</div>
//     );
// }

// function Post(props) {
//     let style = {
//         display: "flex"
//     };
//     return (
//         <div style={style}>
//             <PostButton label='+'handleClick={props.increaseCount}/>
//             <Text text={props.count}width="20"/>
//             <PostButton label='-'handleClick={props.decreaseCount}/>
//         </div>
//     );
// }

// function PostUpvoteButton(props) {
//     return (
//         <div> {
//             props.postUpvoteButton.map((item) => (
//                 <Post key={index}
//                     score={item.count}
//                     increaseCount={() => props.updateCount(index, 1)}
//                     decreaseCount={() => props.updateCount(index, -1)}
//                 />
//             ))
//         } </div>
//     )
// }

// class UpvoteButton extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: "",
//             items: []
//         }
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     updateCount(index, val) {
//         let itemsCopy = this.state.items.slice();
//         itemsCopy[index].score += val;
//         itemsCopy.sort((a,b) => {
//             return b.score - a.score;
//         })
//         this.setState({
//             items: itemsCopy
//         });
//     }

//     render() {
//         return(
//             <div>
//                 <input value={this.state.value} onChange={this.handleChange.bind(this)}/>
//                 <PostUpvoteButton postUpvoteButton = {this.state.items}
//                 updateCount = {this.updateCount.bind(this)}/>
//             </div>
//         );
//     }
// }

export default UpvoteButton;
