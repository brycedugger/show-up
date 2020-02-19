import React, { Component } from "react";
import Button from "react-bootstrap/Button";

function PostButton(props) {
    let style = {
        width:24,
        height: 24,
        color: 'blue'
    };
    return (
        <Button style={style} onClick={() => props.handleClick()}>{props.label}
       </Button>
    );
}

function Text(props) {
    let style = {
        border: "1px solid blue",
        width: props.width
    };
    return(
        <div style={style}>{props.text}</div>
    );
}

function Post(props) {
    let style = {  
        display: "flex"
    };
    return (
        <div style={style}>
            <PostButton label = '+' handleClick = {props.increaseCount}/>
            <Text text = {props.count} width = "20" />
            <PostButton label = '-' handleClick = {props.decreaseCount}/>
        </div>
    );
}

function PostUpvoteButton(props) {
    return(
        <div>
            {
                props.postUpvoteButton.map((item) => (
                    <Post key = {index}
                        score = {item.count}
                        increaseCount = {() => props.updateCount(index, 1)}
                        decreaseCount = {() => props.updateCount(index, -1)}
                    />
                ))
            }
        </div>
    )
}


// export default UpvoteButton;