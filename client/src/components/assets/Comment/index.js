import React from "react";

export function CommentBox() {
  return (
        <div className="comment-wrapper">
          <div className="panel panel-info">
            <h3>Leave a comment</h3>
            <div className="panel-body">
              <textarea
                className="form-control"
                placeholder="Write something here"
                rows="3"
              ></textarea>
              <br />
              <button type="submit" className="btn btn-info">
                Post
              </button>
            </div>
          </div>
        </div>

  );
};
export function CommentDisplay() {
  return (
  <div >
    <ul className="media-list">
      <li className="media">
        <div className="media-body">
          <strong className="text-success">@MartinoMont</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, <a href="www.youtube.com">#consecteturadipiscing </a>.

          </p>
        </div>
      </li>
      <hr/>
    </ul>
  </div>  
  );
}