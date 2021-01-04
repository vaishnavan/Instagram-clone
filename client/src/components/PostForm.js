import React, { Component } from 'react'
import Axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            profileName:'',
            profileImg:'',
            postImg:'',
            status:'',
        };
    }

    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name]:value,
        });
    }

    handleUpload = (e) =>{
        // e.preventDefault();
        const instaData = {
            profileName:this.state.profileName,
            profileImg:this.state.profileImg,
            postImg:this.state.postImg,
            status:this.state.status,
        }
        Axios.post('http://localhost:5000/api/instaPost', instaData)
        .then((res)=>{
            console.log(res);
        });

    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Profile Name</label>
                            <input type="text" className="form-control" name="profileName" onChange={(e)=> this.handleChange(e)} placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Profile Image</label>
                            <input type="text" className="form-control" name="profileImg" onChange={(e)=> this.handleChange(e)} placeholder="Profile Image" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Post</label>
                            <input type="text" className="form-control" name="postImg" onChange={(e)=> this.handleChange(e)} placeholder="Post Image" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Status</label>
                            <input type="text" className="form-control" name="status" onChange={(e)=> this.handleChange(e)} placeholder="Post Status" />
                        </div>
                        <button onClick={(e)=> this.handleUpload(e)} className="btn btn-primary" >Upload</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostForm
