import React, { Component } from 'react';
import img1 from '../src/Assets/sample_image.png'
import { Link } from 'react-router-dom'


class UserInfo extends Component {
    // state = {  }

    constructor() {
        super()
        this.state = {
            user: []
        }
    }



    componentWillMount() {
        fetch(`http://localhost:3000/users/${localStorage.user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
            .then(res => res.json())
            .then(user => {
                // console.log(user)
                this.setState({
                    user: user.data.attributes
                })
            })
            // console.log(this.state.user.appointments.length)
    }


    


    render() { 

        console.log(this.state.user.posts)
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
                <label>username:  
                    <h5>{this.state.user.username}</h5>
                </label><br></br> 
                    <div style={{display:"inline-grid"}}>
                        <h5>total posts contributions:</h5><br></br>
                        {/* {this.state.user.appointments}<br></br> */}
                        <h5>total comments contributions:</h5><br></br>
                        <label>active chatrooms:</label>                
                        <h6> <Link to="/chat" >chatroom</Link></h6><br></br>
                        <label>inactive chatrooms:</label>
                        <h6>link to logout</h6>
                    </div>
                    

                </div>
            </div>
        );
    }
}
 
export default UserInfo;