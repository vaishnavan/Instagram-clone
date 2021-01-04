import React, { Component } from 'react';
import Axios from 'axios';

class CommentDisplay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             commentstore:[]
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/api/allcomments')
        .then((res)=>{
            this.setState({
                commentstore:res.data,
            });
        });
    }
    
    render() {
        const { commentstore } = this.state;
        return (
            <div>
                {commentstore.map((data,i)=>{
                    return(
                        <div key={i}>
                            <span>{data.comments}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CommentDisplay
