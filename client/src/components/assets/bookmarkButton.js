import React from "react";

class BookmarkButton extends Component {
    constructor(){
        super();
        this.state = { bookmarkbtn: {} };
    }
    render() {
        return (
            <ul>
                {this.props.bookmark.map((saved, i) => (
                    <button
                    className={
                        this.state.bookmarkbtn.type === saved.type ? "selected" : ""
                    }
                    onClick={this.bookmarkbtn.bind(this, saved)}
                    style={{ cursor: "pointer" }}
                    key={saved.type}
                >
                {saved.ref}
                    </button>
                ))}
            </ul>
        );
    }
    bookmarkbtn(selected) {
        if (selected.saved !== this.state.bookmarkbtn.saved) {
            this.setState({ bookmarkbtn: selected });
        }else {
            this.setState({ bookmarkbtn: {} });
        }
    }
}
const data = [
    { saved: "fa fa-bookmark