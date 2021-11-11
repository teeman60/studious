import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
import './Cards/card-style.css'
import Footer from './Footer'

import img1 from './Assets/sample_image.png'


class UserInfo extends Component {
   
    constructor() {
        super()
        this.state = {
            user: []
        }
    }



    componentDidMount() {
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
                if (localStorage.token) {
                this.setState({
                    user: user.data.attributes
                })} else {alert("please log in")} 
            })
            
    }


    logout = () => {
        localStorage.clear()
        this.props.history.push('/studious')
        
    }    


    render() { 
        return localStorage.token !== undefined && this.state.user !== null ? ( 
             
            <div style={{
                display: "inline",
                justifyContent: "space-around",
                margin: "0rem 0rem",
            }}>
            <NavBar history={this.props.history}/>

            <div style={{borderBottom: '1px solid magenta', width: '50%'}}>
              
                <img style={{width: "160px", height:"160px", marginLeft: '10rem', borderRadius:"80px", borderBottom: '2px solid brown'}} 
                  src={img1} alt="user"
                />
            </div>

            <div style={{marginLeft: '10rem', marginTop: '2rem'}}>
                
                <label>username:  
                    <h3>{this.state.user.username}</h3>
                </label><br></br> 
                    <div style={{display:"inline-grid"}}>
                        <label>total posts contributions:
                        {this.state.user.posts !== undefined ?
                        <h6 style={{color: 'red'}}>{this.state.user.posts.length}</h6>:
                        <h5>no post info</h5>
                        }</label>
                        
                        <label>total comments contributions:
                        {this.state.user.posts !== undefined ?
                        <h6 style={{color: 'red'}}>{this.state.user.comments.length}</h6>:
                        <h5>no comments info</h5>
                        }</label>

                        <label>total skill goals set:
                        {this.state.user.posts !== undefined ?
                        <h6 style={{color: 'red'}}>{this.state.user.appointments.length}</h6>:
                        <h5>no comments info</h5>
                        }</label>

                        <label>active chatrooms:                
                        <h6> <Link to="/chatroom" >chatroom</Link></h6></label>
                        <label>inactive chatrooms:</label>
                        <button className="btn-danger"  onClick={this.logout} style={{width: '5rem'}}>Logout</button>
                    </div>         
                </div>
                <Footer />
            </div>
        ):(
            <h3 style={{textAlign:"center"}}> You're Not Logged In, Please <Link to="/studious" >login</Link></h3>
        )
    }
}
 
export default UserInfo;