import React from "react";

function Cards(props) {
  return (
    <div>
      <div style={{ width: "18rem" }} alt="card">
        <img variant="top" src="holder.js/100px180" alt={props}/>
        <body>
          <title>{props.title}</title>
          <p>{props.headliner}</p>
          <p>{props.date}</p>
          <p>{props.time}</p>
          <button variant="upvotebtn">Upvote</button>
          <button variant="bookmarkbtn">Bookmark</button>
        </body>
      </div>
    </div>
  );
}

export default Cards;
