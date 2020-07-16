import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './SignUp';
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo';

class Login extends Component {
    // state = {  }


    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })  
        // this.props.history.push("/signup")      
    }


   

    login = (e) => {
        e.preventDefault()
        
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
                    
        })
            .then(res => res.json())
            .then(UserInfo => {
                localStorage.token = UserInfo.token
            })

    }


    render() { 
        return (
                 
                <div >
                   
                    Login Page                    
                    
                    <h2>Login</h2>
                    <form onSubmit={(e) => this.login(e)}>
                        <label>Username</label>
                        <input name="username" type="text" onChange={(e) => this.handleChange(e)}/>
                        <label>Password</label>
                        <input name="password" type="password" onChange={(e) => this.handleChange(e)}/>
                        <input type="submit" />
                    </form>
                    {/* <button onClick={this.handleChange}>Sign Up</button> */}
                    
                </div>
           
         );
    }
}
 
export default Login;