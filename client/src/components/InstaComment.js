import React, { Component } from 'react';
import './instacomment.css';
import Axios from 'axios';

class InstaComment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            comments: e.target.value,
        });
    }

    handleClick = (e) => {
        // e.preventDefault();
        const commentdata = {
            comments: this.state.comments,
        }
        Axios.post('http://localhost:5000/api/commentPost', commentdata)
            .then((res) => {
                console.log(res);
            });
    }

    render() {
        return (
            <div className="insta_comment">
                <form onSubmit={(e) => this.handleClick(e)} >
                    <input type="text" placeholder="Add a comment" onChange={(e) => this.handleChange(e)} />
                </form>
            </div>
        )
    }
}

export default InstaComment;
