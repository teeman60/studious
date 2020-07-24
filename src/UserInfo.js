import React, { Component } from 'react';
import img1 from '../src/Assets/sample_image.png'

class UserInfo extends Component {
    // state = {  }

    constructor() {
        super()
        this.state = {
            // user: [],
            // commentsNumber: null,
            // postsNumber: null
        }
    }


    // getUser = (user) => {
    //     fetch(`http://localhost:3000/users/${user.id}`)
    // }


    render() { 

        console.log(this.props)
        return (  
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "1px solid brown"
            }}>
                <div>
                    <img style={{width: "160px", height:"160px", borderRadius:"80px"}} 
                    src={img1}
                    />

                </div>

                <div>
                    <h5>{this.props.user.username}</h5>
                    <div style={{display:"inline-grid"}}>
                        <h5>number of posts contributed</h5><br></br>
                        <h5>number of comments contributed</h5><br></br>
                        <h6>link to chatroom</h6><br></br>
                        <h6>link to logout</h6>
                    </div>
                    

                </div>
            </div>
        );
    }
}
 
export default UserInfo;