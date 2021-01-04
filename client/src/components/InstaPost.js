import axios from 'axios'
import React, { Component } from 'react'
import moment from 'moment';
import { Icon } from 'semantic-ui-react';
import './instapost.css';
import InstaSticky from './InstaSticky';
import Navbar from './Navbar';
import InstaComment from './InstaComment';
import CommentDisplay from './CommentDisplay';

class InstaPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            instaData: [],
            count: 0,
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/api/allInstaPost')
            .then((res) => {
                this.setState({
                    instaData: res.data,
                });
            });
    }

    render() {
        const { instaData, } = this.state;
        return (
            <div style={{background:"#fafafa"}}>
                <Navbar />
                <div className="container insta_main">
                    <div>
                        {instaData.reverse().map((item) => {
                            return (
                                <div key={item._id}>
                                    <div className="insta_card">
                                        <div className="insta_head">
                                            <div className="insta_profile">
                                                <img src={item.profileImg} width="50" height="50" alt="no" />
                                            </div>
                                            <div className="insta_name">
                                                <h4>{item.profileName}</h4>
                                            </div>
                                        </div>
                                        <div className="insta_post">
                                            <img src={item.postImg} alt="no" />
                                        </div>
                                        <div className="insta_cardBotm">
                                            <div className="insta_icon">
                                                <div className="insta_iconL">
                                                    <Icon name="heart" onClick={this.handleLike} color="red" size="large" />
                                                    <Icon name="comment outline" size="large" />
                                                    <Icon name="send outline" size="large" />
                                                </div>
                                                <div className="insta_iconR">
                                                    <Icon name="bookmark outline" size="large" />
                                                </div>
                                            </div>
                                            <div className="insta_status">
                                                <span><b>{item.profileName}</b> {item.status}</span>
                                            </div>
                                            <div className="insta_upadte">
                                                <span style={{ textTransform: "uppercase" }} >{moment(item.postDate).fromNow()}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <CommentDisplay /> */}
                                    <InstaComment />
                                </div>
                            )
                        })}
                        
                    </div>
                    <div className="insta_stickyCard">
                        <InstaSticky />
                    </div>
                </div>

            </div>
        )
    }
}

export default InstaPost
