import React from "react";

function Comment () {
    return (
        <div>
            <input type="text" class="form-control ds-input" id="comment-box" placeholder="Comments" />
            <br />
            <button class="btn btn-primary" type="submit" id="submit-btn">submit</button>
        </div>
    );
}

export default Comment;
