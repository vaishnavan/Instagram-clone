import React, { Component } from 'react'
import { Item } from 'semantic-ui-react';

class InstaSticky extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             followData:[
                 {name:"siva", profileImg:"data:image/jpeg;base64,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", profileName:"Siva_RockStar", status:"Follow", unstatus:"UnFollow"},
                 {name:"Kannnan", profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5q4AIj4neg4vCDo3cR5tAu1N8N38lOi982w&usqp=CAU", profileName:"Kannan_Born", status:"Follow", unstatus:"UnFollow"},
                 {name:"CodeBank", profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNwXpk0y5mUSWCpbJX_XkIv4nzYpRXhTYgA&usqp=CAU", profileName:"Code_RockStar", status:"Follow", unstatus:"UnFollow"},
             ],
             show:false,
        };
    }

    handleStatus = (i) =>{
        const { show } = this.state;
        this.setState({
            show:{...show,[i]:!show[i]},
        });
    }
    
    render() {
        const { followData, show } = this.state;
        return (
            <div>
                <div className="insta_stickyCard">
                    <div className="insta_switch">
                        <div className="switch_image">
                            <img src="https://images.unsplash.com/photo-1609504835772-01d40b80347f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="no" />
                        </div>
                        <div className="switch_profile">
                            <b>Sakthi_ns_pulsar_5</b><br />
                            <span>Vaishnavan M</span>
                        </div>
                        <div className="switch_link">
                            <p>Switch</p>
                        </div>
                    </div>
                    <div className="insta_suggest">
                        <b>Suggestions For You</b>
                    </div>
                    {followData.map((data, i) => {
                        return (
                            <div key={i}>
                                <div className="insta_switch">
                                    <div className="switch_image">
                                        <img src={data.profileImg} alt="no" />
                                    </div>
                                    <div className="switch_profile">
                                        <b>{data.profileName}</b><br />
                                        <span>{data.name}</span>
                                    </div>
                                    <div className="switch_link">
                                        {show[i] ?
                                        <p onClick={()=>this.handleStatus(i)}>{data.unstatus}</p>
                                        :
                                        <p onClick={()=>this.handleStatus(i)}>{data.status}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default InstaSticky
