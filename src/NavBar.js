import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo';

class NavBar extends Component {



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
                this.setState({
                    user: [... this.state.user, user.data.attributes]
                })
                
                // {<UserInfo gty={user.data.attributes} />}
                // console.log(this.state.user)
            })
            
    }


    getUser = () => {
        console.log(this.state.user)
        // {<UserInfo user={this.state.user}/>}
        this.props.history.push('/user')
    }


    logout = () => {
        localStorage.clear()
        this.props.history.push('/')
        
    }


    
    render() { 
        

        // {this.state.user} = filled

        return ( 
            
            this.state.user.length > 0
            ?
            <div>
                <button onClick={this.getUser}>Profile</button>
                
                <div>
                    {/* app image / logo */}
                </div>
                <div>
                    {/* <UserInfo user={this.state.user}/> */}
                </div>
                <div id="header" className="hoc clear">
                    <button onClick={this.logout}>Logout</button>
                </div>
                {this.props.comm}
            </div>
            :
            null
         );
    }
}
 
export default NavBar;